const VIDEO_DATA = {
    english: [
      {
        title: "Learn Basic English in less than 3 hours",
        url: "https://www.youtube.com/embed/1VSt_KbDDQg?si=k_Fygz_r-4kjNYPt", 
        access: "premium"
      }
    ],
    arabic: [
      {
        title: "Learn Arabic upto N1",
        url: "https://www.youtube.com/embed/3JoAmWzUf4s?si=4tGh5lNuGEvFpnrH",
        access: "premium"
      }
    ],
    german: [
      {
        title: "Learn German upto A1",
        url: "https://www.youtube.com/embed/mNX1wpIQ4Uk?si=ebc-oO0pyIfjc9C8",
        access: "standard"
      }
    ]
  };

  
  $(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = localStorage.getItem("selectedLanguage") || "english";

  
    $('#video-language').text(lang.charAt(0).toUpperCase() + lang.slice(1));
  
    const videos = VIDEO_DATA[lang];
  
    if (videos && videos.length > 0) {
      const video = videos[0]; 
  
      $('#video-player').html(`
        <iframe width="560" height="315" src=${video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      `);
  
      $('#video-description').text(video.title);
    } else {
      $('#video-player').html('<p>No video available for this language.</p>');
      $('#video-description').text('');
    }
  });
  