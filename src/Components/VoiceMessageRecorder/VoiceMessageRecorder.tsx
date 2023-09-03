import { useState, useEffect } from "react";

type VoiceMessageRecorderPropsType = {
  isShowRecoding: boolean;
  setIsShowRecoding: (param: boolean) => void;
  audioBlob: Blob | null;
  setAudioBlob: (param: Blob) => void;
  isRecording: boolean;
  setIsRecording: (param: boolean) => void;
  mediaRecorderRef: any;
  stopRecording: () => void;
};

function VoiceMessageRecorder({
  isShowRecoding,
  setIsShowRecoding,
  audioBlob,
  setAudioBlob,
  isRecording,
  setIsRecording,
  mediaRecorderRef,
  stopRecording,
}: VoiceMessageRecorderPropsType) {
  const [recordingTime, setRecordingTime] = useState(0);
  useEffect(() => {
    isShowRecoding && startRecording();
  }, [isShowRecoding]);

  useEffect(() => {
    let timer: number | undefined;

    if (isRecording) {
      timer = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
      setRecordingTime(0);
    }

    if (recordingTime > 60) {
      clearInterval(timer);
      stopRecording();
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRecording, recordingTime]);

  const startRecording = async () => {
    // let mediaRecorder = mediaRecorderRef.current as MediaRecorder;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorderRef.current.ondataavailable = (e: any) => {
        if (e.data.size > 0) {
          audioChunks.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        setAudioBlob(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  return (
    <div className="relative flex items-center gap-x-3 grow">
      <button
        className="bg-[#0080ff] rounded-full p-1"
        onClick={() => {
          setIsShowRecoding(false);
          stopRecording();
        }}
      >
        <svg className="w-2.5 h-2.5 text-white">
          <use href="#close"></use>
        </svg>
      </button>
      {isShowRecoding && (
        <button
          className="absolute left-9 bg-white p-1 rounded-full"
          onClick={stopRecording}
        >
          <svg className="w-4 h-4 text-[#0080ff]">
            <use href="#stop"></use>
          </svg>
        </button>
      )}
      <p className="absolute right-1.5 text-[13px] font-[600] bg-white text-[#0080ff] px-2 py-0.5 rounded-full">
        {recordingTime === 60 ? "1" : "0"}:
        {recordingTime < 10
          ? `0${recordingTime}`
          : recordingTime === 60
          ? "00"
          : recordingTime}
      </p>
      {isRecording ? (
        <div className="w-full h-8 bg-[#0080ff] rounded-full overflow-hidden">
          <div
            className="progress-bar h-full bg-[#3399ff]"
            style={{ width: `${(recordingTime / 60) * 100}%` }}
          />
        </div>
      ) : (
        audioBlob && (
          <audio
            controls
            src={URL.createObjectURL(audioBlob)}
            className="w-full h-8"
          />
        )
      )}
    </div>
  );
}

export default VoiceMessageRecorder;
