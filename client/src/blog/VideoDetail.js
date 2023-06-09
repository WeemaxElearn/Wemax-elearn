import React, { useEffect } from "react";
import YouTube from "react-youtube";
import Certificate from "./components/Certificate";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const VideoDetail = ({ video, videos }) => {
  const userId = localStorage.getItem("userid");
  const { id } = useParams();

  const addingVideoMapper = (video) => {
    axios
      .post("https://weemaxelearn.in/api/coursemapping", {
        courseId: id,
        letctureId: video._id,
        watched: true,
        userId: userId.replace(/["']/g, ""),
      })
      .then((response) => {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const allowToWatchtheVideo = async () => {
    let constraint = false;
    if (Array.isArray(videos)) {
      const videoIndex = videos.findIndex((item) => item._id === video._id);
      if (videoIndex === 0) {
        constraint = true;
      }

      if (videoIndex > 0) {
        await Promise.resolve(
          axios
            .post("https://weemaxelearn.in/api/checkprevlec_status", {
              courseId: id,
              prevletctureId: videos[videoIndex - 1]._id,
              userId: userId.replace(/["']/g, ""),
            })
            .then((response) => {
              console.log("Response from Data", response);
              constraint = true;
            })
            .catch(function (error) {
              console.log("Err", error);
            })
        );
      }
    }
    return constraint;
  };

  function getVideoId(videoLink) {
    const youtubePattern =
      /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
    const youtubeMatch = videoLink.match(youtubePattern);
    if (youtubeMatch && youtubeMatch[2]) {
      return youtubeMatch[2];
    } else {
      // Assuming videoLink is a local video file path
      return videoLink;
    }
  }

  const opts = {
    height: "400",
    width: "700",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onPlay = async (event) => {
    const isAllowed = await allowToWatchtheVideo();
    if (isAllowed) {
      addingVideoMapper(video);
    } else {
      event.target.pauseVideo();
      toast.error(`You need to complete the previous course`);
    }
  };

  const onEnd = (event) => {
    if (video) {
      axios
        .put("https://weemaxelearn.in/api/courmappingupdate", {
          courseId: id,
          letctureId: video._id,
          completed: true,
          userId: userId.replace(/["']/g, ""),
        })
        .then((response) => {})
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  // const onReady = (event) => {

  // };

  return (
    <div>
      {video ? (
        <div className="cta-video-image">
          {video.videoLink.includes(".mp4") ||
          video.videoLink.includes(".mkv") ? (
            <video src={video.videoLink} width="100%" controls />
          ) : (
            <div className="ui embed">
              <YouTube
                videoId={getVideoId(video.videoLink)}
                opts={opts}
                onPause={true}
              />
            </div>
          )}
          <ToastContainer />
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
};

export default VideoDetail;
