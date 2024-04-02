import React from 'react'

const Carosal = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.pbs.org/wgbh/americanexperience/media/filer_public_thumbnails/filer_public/f8/a1/f8a10d40-596f-4ad1-8db5-fa6edf834e55/idealbookshelfcp524-wgbhamericanexperience-bannedbooks-2000web.jpg__2000x1161_q85_crop_subsampling-2_upscale.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.booktrust.org.uk/globalassets/images/news-and-features/blogs-2023/december/movies-and-tv-shows-2024-16x9.jpg?w=1200&h=675&quality=70&anchor=middlecenter" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.booktrust.org.uk/globalassets/images/news-and-features/blogs-2022/12.-december/2023-tv-and-movies-books-16x9.jpg?w=1200&h=675&quality=70&anchor=middlecenter" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carosal
