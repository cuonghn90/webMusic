import React from "react";
import { useState, useContext, useEffect } from "react";
import { ChangePage } from "../../App";
import { listTopSong } from "../Page/DiscoverPage/ContantsDiscover";
import { listAlbum } from "../Page/AlbumsPage/constantListAlbum";
import { convertDataSong } from "../Page/constantFunction";
import {
  listSongNhacTre,
  listSongNhacKpop,
  listSongNhacVang,
  listSongNhacRemix,
} from "../Page/SongPage/constantTypeSong";
import styled from "styled-components";
import { listArtist } from "../Page/constListArtist";
import DiscoverPage from "../Page/DiscoverPage/DiscoverPage";

export default function ManipulateSong() {
  const data = useContext(ChangePage);
  const handleRandom = () => {
    const tagRandom = document.querySelector(".RandomSong");
    tagRandom.classList.toggle("active");
  };
  const handlePause = () => {
    const isPlaying = data.play.isPlaying;
    const index = data.play.index;
    data.handleChangePlay(!data.play.isPlaying, index);
  };
  const handleLoopSong = () => {
    const tagLoopSong = document.querySelector(".LoopSong");
    const tagRandomSong = document.querySelector(".RandomSong");
    data.handleSetIsLoopSong();
    if (!data.isLoopSong) {
      data.handleSetIsRandom2();
    }
  };
  const handleRandomSong = () => {
    const tagRandomSong = document.querySelector(".RandomSong");
    const tagLoopSong = document.querySelector(".LoopSong");
    data.handleSetIsRandom();
    if (!data.isRandom) {
      data.handleSetIsLoopSong2();
    }
  };
  const handleNextSongPage = (listTopSong) => {
    const listId = listTopSong.map((song) => song.id ? song.id : song.idSong)
    let endId = listId.indexOf(data.dataSong.id)
    console.log(endId, data.dataSong.id)
    if (endId + 1 >= listTopSong.length) {
      if (data.namePage == "AlbumsPage") {
        data.handleChangeDataSong(listTopSong[endId]);
      }
      else {
        data.handleChangeDataSong(listTopSong[endId]);
      }
      data.handleChangePlay(true, listTopSong[endId].id ? listTopSong[endId].id + 1 : listTopSong[endId].idSong + 1);
    } else {
      if (data.namePage == "AlbumsPage") {
        data.handleChangeDataSong(listTopSong[endId + 1]);
      }
      else {
        data.handleChangeDataSong(listTopSong[endId + 1]);
      }
      data.handleChangePlay(true, listTopSong[endId + 1].id ? listTopSong[endId + 1].id + 1 : listTopSong[endId + 1].idSong + 1);
    }
  };
  const handleNextSongFavorite = (listSong) => {
    const indNext = listSong.indexOf(data.dataSong.id + 1);
    console.log(listSong)
    if (indNext >= listSong.length - 1) {
      data.handleChangeDataSong(listTopSong[listSong[listSong.length - 1] - 1]);
      data.handleChangePlay(true, listSong[listSong.length - 1]);
    } else {
      data.handleChangeDataSong(listTopSong[listSong[indNext + 1] - 1]);
      data.handleChangePlay(true, listSong[indNext + 1]);
    }
  };
  const handlePrevSongFavorite = (listSong) => {
    const index = data.dataSong.id + 1;
    const indNext = listSong.indexOf(index);
    if (indNext <= 0) {
      data.handleChangeDataSong(listTopSong[listSong[0] - 1]);
      data.handleChangePlay(true, listSong[0]);
    } else {
      data.handleChangeDataSong(listTopSong[listSong[indNext - 1] - 1]);
      data.handleChangePlay(true, listSong[indNext - 1]);
    }
  };
  const handlePrevSongPage = (listTopSong) => {
    let index = data.dataSong.id;
    const listId = listTopSong.map((song) => song.id ? song.id : song.idSong)
    let endId = listId.indexOf(data.dataSong.id)
    if (endId <= 0) {
      if (data.namePage == "AlbumsPage") {
        data.handleChangeDataSong(listTopSong[endId]);
      }
      else {
        data.handleChangeDataSong(listTopSong[endId]);
      }
      data.handleChangePlay(true, listTopSong[endId].id ? listTopSong[endId].id + 1 : listTopSong[endId].idSong + 1);
    } else {
      if (data.namePage == "AlbumsPage") {
        data.handleChangeDataSong(listTopSong[endId - 1]);
      }
      else {
        data.handleChangeDataSong(listTopSong[endId - 1]);
      }
      data.handleChangePlay(true, listTopSong[endId - 1].id ? listTopSong[endId - 1].id + 1 : listTopSong[endId - 1].idSong + 1);
    }
  };
  const handleNextSong = () => {
    if (data.pagePlaying == "DiscoverPage") {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "FavoritePage") {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "SongPage") {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    }
    else if (data.pagePlaying == "AlbumsPage") {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "ArtistPage") {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    }
    else {
      if (data.namePage == "DiscoverPage") {
        handleNextSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handleNextSongFavorite(data.liked);
      } else if (data.namePage == "SongPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handleNextSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handleNextSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handleNextSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handleNextSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handleNextSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handleNextSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handleNextSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handleNextSongPage(listSongNhacRemix);
          } else {
            handleNextSongPage(listTopSong);
          }
        }
      } else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handleNextSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handleNextSongPage(listAlbum[data.playThisAlbum].listSong);
        }
      } else if (data.namePage == "ArtistPage") {
        handleNextSongPage(listArtist[data.artist].topSongs);
      }
      else {
        handleNextSongPage(listTopSong);
      }
    }

  };
  const handlePrevSong = () => {
    if (data.pagePlaying == "DiscoverPage") {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "FavoritePage") {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "SongPage") {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    }
    else if (data.pagePlaying == "AlbumsPage") {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    } else if (data.pagePlaying == "ArtistPage") {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    }
    else {
      if (data.namePage == "DiscoverPage") {
        handlePrevSongPage(listTopSong);
      } else if (data.namePage == "FavoritePage") {
        handlePrevSongFavorite(data.liked);
      } else if (data.namePage == "songPage") {
        if (data.typeSong == "NhacTre" && data.playThisTypeSong == "NhacTre") {
          handlePrevSongPage(listSongNhacTre);
        } else if (data.typeSong == "NhacVang" && data.playThisTypeSong == "NhacVang") {
          handlePrevSongPage(listSongNhacVang);
        } else if (data.typeSong == "NhacKpop" && data.playThisTypeSong == "NhacKpop") {
          handlePrevSongPage(listSongNhacKpop);
        } else if (data.typeSong == "NhacRemix" && data.playThisTypeSong == "NhacRemix") {
          handlePrevSongPage(listSongNhacRemix);
        } else {
          if (data.playThisTypeSong == "NhacTre") {
            handlePrevSongPage(listSongNhacTre);
          } else if (data.playThisTypeSong == "NhacKpop") {
            handlePrevSongPage(listSongNhacKpop);
          } else if (data.playThisTypeSong == "NhacVang") {
            handlePrevSongPage(listSongNhacVang);
          } else if (data.playThisTypeSong == "NhacRemix") {
            handlePrevSongPage(listSongNhacRemix);
          } else {
            handlePrevSongPage(listTopSong);
          }
        }
      }
      else if (data.namePage == "ArtistPage") {
        handlePrevSongPage(listArtist[data.artist].topSongs);
      }
      else if (data.namePage == "AlbumsPage") {
        if (data.idCurrentAlbum == data.playThisAlbum) {
          handlePrevSongPage(listAlbum[data.idCurrentAlbum].listSong);
        }
        else {
          handlePrevSongPage(listAlbum[data.playThisAlbum].listSong);
        }

      } else {
        handlePrevSongPage(listTopSong);
      }
    }

  };
  return (
    <Wapper>
      <Manipulate
        className={data.isRandom ? "RandomSong active" : "RandomSong"}
        onClick={() => handleRandomSong()}
      >

        <i className="fa fa-random" aria-hidden="true"></i>
      </Manipulate>
      <Manipulate className="PrevSong" onClick={() => handlePrevSong()}>
        <i className="fa fa-backward" aria-hidden="true"></i>
      </Manipulate>
      <Manipulate className="PauseSong" onClick={() => handlePause()}>
        <i
          className={data.play.isPlaying ? "fa fa-pause" : "fa fa-play"}
          aria-hidden="true"
        ></i>
      </Manipulate>
      <Manipulate className="NextSong" onClick={() => handleNextSong()}>
        <i className="fa fa-forward" aria-hidden="true"></i>
      </Manipulate>
      <Manipulate
        className={data.isLoopSong ? "LoopSong active" : "LoopSong"}
        onClick={() => handleLoopSong()}
      >
        <i className="fa fa-undo" aria-hidden="true"></i>
      </Manipulate>
    </Wapper>
  );
}
const Wapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Manipulate = styled.div`
  margin: 0 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 18px;
  &.RandomSong.active {
    color: red;
  }
  &.LoopSong.active {
    color: red;
  }
`;
