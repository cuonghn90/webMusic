export const addToLocalStorage = (e, index, data) => {
  e.stopPropagation();
  data.addItemToLocalStorage("liked", index);
  data.handleArrayLiked("liked");
};
export const handPlayTopSong = (
  id,
  nameClassFather,
  nameClassIconPlay,
  data,
  listTopSong
) => {
  const iconPlay = document.querySelectorAll(nameClassIconPlay);
  const song = document.querySelectorAll(nameClassFather);
  for (let i = 1; i <= song.length; i++) {
    if (i == id) {
      if (data.namePage == "AlbumsPage") {
        data.handleSetPlayThisAlbum(parseInt(song[0].getAttribute("data-id")))
        data.handleChangeDataSong(listTopSong[i - 1]);
      }
      else {
        if (data.namePage == "SongPage") {
          data.handleSetPlayThisTypeSong(song[0].getAttribute("data-id"))
        }
        data.handleChangeDataSong(listTopSong[i - 1]);
      }
      song[i - 1].classList.add("active");
      iconPlay[i - 1].classList.add("fa-pause");
      iconPlay[i - 1].classList.remove("fa-play");
      data.handleChangePlay(true, i);
      // setPlay({ isPlaying: true, index: i });
    } else {
      song[i - 1].classList.remove("active");
      iconPlay[i - 1].classList.add("fa-play");
      iconPlay[i - 1].classList.remove("fa-pause");
    }
  }
};
export const togglePlay = (
  e,
  id,
  nameClassFather,
  nameClassIconPlay,
  data,
  listTopSong
) => {
  e.stopPropagation();
  const namePage = data.namePage
  data.handleSetPagePlaying(namePage)
  const iconPlay = document.querySelectorAll(nameClassIconPlay);
  const song = document.querySelectorAll(nameClassFather);
  for (let i = 1; i <= iconPlay.length; i++) {
    if (i == id) {
      song[i - 1].classList.add("active");
      if (iconPlay[i - 1].classList.contains("fa-pause")) {
        data.handleChangePlay(false, i);
        iconPlay[i - 1].classList.add("fa-play");
        iconPlay[i - 1].classList.remove("fa-pause");
      } else {
        if (data.namePage == "AlbumsPage") {
          data.handleSetPlayThisAlbum(parseInt(song[0].getAttribute("data-id")))
          data.handleChangeDataSong(listTopSong[i - 1]);

        }
        else {
          if (data.namePage == "SongPage") {
            data.handleSetPlayThisTypeSong(song[0].getAttribute("data-id"))
          }
          data.handleChangeDataSong(listTopSong[i - 1]);

        }
        data.handleChangePlay(true, i);
        iconPlay[i - 1].classList.remove("fa-play");
        iconPlay[i - 1].classList.add("fa-pause");
      }
    } else {
      song[i - 1].classList.remove("active");
      iconPlay[i - 1].classList.add("fa-play");
      iconPlay[i - 1].classList.remove("fa-pause");
    }
  }
};
export const convertDataSong = (data) => {
  const newData = {
    id: data.idSong ? data.idSong : data.id,
    image: data.imageSong ? data.imageSong : data.image,
    artist: data.artistSong ? data.artistSong : data.artist,
    name: data.nameSong ? data.nameSong : data.name,
    album: data.albumSong ? data.albumSong : data.album,
    time: data.timeSong ? data.timeSong : data.time,
    play: data.timeSong ? data.timeSong : data.time,
    source: data.sourceSong ? data.sourceSong : data.source,
  }
  return newData
}
export const convertSongToListSong = (song) => {
  return {
    idSong: song.id,
    imageSong: song.image,
    artistSong: song.artist,
    nameSong: song.name,
    albumSong: song.album,
    timeSong: song.time,
    sourceSong: song.source,
  }
}