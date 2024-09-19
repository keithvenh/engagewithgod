import './gallery.scss';

export default function Gallery() {

  const images = [];
  for(let i = 1; i <= 12; i++) {
    const image = require(`../../assets/images/gallery/${i}.jpg`);
    images.push(image);
  }

  return (
    <article className='gallery'>
      <h2>Outreach Gallery</h2>
      <p>A picture is worth a thousand words. So here is a twelve-thousand word article for you to read to get a picture of what we do.</p>
      <p>Just kidding! Here are twelve pictures from some of our Bible Distribution outreaches!</p>

      <div className='image-gallery'>
        {images.map((image, index) => <img key={index} src={image} />)}
      </div>
    </article>
  )
}