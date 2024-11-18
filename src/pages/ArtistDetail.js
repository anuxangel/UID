import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ArtistDetail.css';

const artistData = [
  {
    id: '1',
    name: 'Sophia Elmore',
    bio: `Sophia Elmore is a renowned abstract artist whose works blend traditional painting techniques with modern digital methods. Over the past decade, she has gained international recognition for her ability to evoke deep emotional responses through vivid color contrasts and intricate geometric shapes.
    Born and raised in Paris, Sophia was exposed to a rich cultural heritage that heavily influenced her early works. After completing her studies at the École des Beaux-Arts, she ventured into digital mediums, integrating technology to explore new dimensions in her art. Her use of layered textures and immersive compositions allows viewers to experience a blend of classic art principles and futuristic ideas.
    Sophia's major works include the 'Chromatic Reverie' series, which was showcased at the Louvre in 2018, and 'The Geometry of Emotions,' a collection exploring human emotions through abstract forms. She continues to innovate in the world of abstract art, challenging the boundaries between physical and digital realms.`,
    image: 'https://toptenfamous.com/wp-content/uploads/2021/05/Katy-Perry.jpg',
    works: ['https://d7hftxdivxxvm.cloudfront.net/?height=767&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F4LZa7jt1zVg4_RZFhiaaYA%2Fnormalized.jpg&width=767', 'https://d7hftxdivxxvm.cloudfront.net/?height=767&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FlSuCeFU3Ez3I6QLUSBOlxg%2Fnormalized.jpg&width=767','https://d7hftxdivxxvm.cloudfront.net/?height=767&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FXXmdmmoaFFNSTJF5-qlZ0g%2Fnormalized.jpg&width=767','https://d7hftxdivxxvm.cloudfront.net/?height=767&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F_GskSkBrC60KaFpkOvU_WA%2Fnormalized.jpg&width=767','https://d7hftxdivxxvm.cloudfront.net/?height=1440&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F8oSgBHMho2LDGElM3eenyw%2Fnormalized.jpg&width=1440','https://d7hftxdivxxvm.cloudfront.net/?height=767&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxMv5KWwPVhdn7JuuFY-jvg%2Fnormalized.jpg&width=767']
  },
  {
    id: '2',
    name: 'Daniel Cruz',
    bio: `"Daniel Cruz is an influential contemporary landscape artist, celebrated for his ability to capture the ever-changing dynamics of urban and rural spaces. Born in Mexico City, Daniel's early years were shaped by the bustling metropolis around him, but it was during his travels through the rural outskirts of South America that his artistic journey took a defining turn. His work marries the contrast between the urban sprawl and the serene, untouched nature, a dichotomy he expresses through bold brushstrokes and striking color palettes.Daniel work has been exhibited in galleries across the globe, including New York, Berlin, and Tokyo. His acclaimed series "Concrete Horizons" explored the tension between industrialization and the environment, while "Silent Plains" focused on the untouched beauty of remote landscapes.`,
    image: "https://wallpapercave.com/wp/wp3988683.jpg",
    works: ['https://www.floricaprevenda.com/sites/default/files/portfolio/images/paintings-80s-04.jpg', 'https://th.bing.com/th/id/OIP.y8z4vOuDN7UmjWMrRDi9IwHaF3?rs=1&pid=ImgDetMain','https://www.floricaprevenda.com/sites/default/files/portfolio/images/paintings-80s-02.jpg','https://i.etsystatic.com/20476529/r/il/9c6b93/3166409291/il_fullxfull.3166409291_jkbi.jpg','https://th.bing.com/th/id/OIP.M6iEIg1Ami6iJqTXMpkQrQHaO0?rs=1&pid=ImgDetMain','https://th.bing.com/th/id/OIP.gJjCcWD2VE7r-qx1NJDFrAHaI_?rs=1&pid=ImgDetMain']
  },
  {
    id: '3',
    name: 'Nina Brooks',
    bio: 'Nina Brooks is a captivating surrealist artist known for her emotionally charged portraits that delve into the complexities of human experience. Born in San Francisco, California, Nina grew up surrounded by the vibrant art scene of the Bay Area, which significantly influenced her artistic development. From a young age, she displayed a keen interest in visual storytelling, often combining traditional techniques with modern themes.Nins signature technique involves layering translucent colors and textures, creating depth and movement that resonate with her audience. Her portraits often depict individuals in surreal landscapes, blending their features with natural elements, such as flowers, clouds, or cosmic patterns. This fusion reflects her belief in the interconnectedness of all beings and the natural world.',
    image: "https://tse1.mm.bing.net/th?id=OIP.woI5XKNDAQk3B6pPSUeP3QHaE8&pid=Api&P=0&h=180",
    works: ['https://tse2.mm.bing.net/th?id=OIP.K1DFYRBWV3cT_q0MZF7jNwHaE8&pid=Api&P=0&h=180','https://tse3.mm.bing.net/th?id=OIP.cQYk15vQLKuv7RKbSSYKRAHaHa&pid=Api&P=0&h=180','https://1.bp.blogspot.com/-ekTejpwv2NU/VNPK7wucUlI/AAAAAAAADbs/-ytw6gg_yGUuU04nLn6tp5Ljvud-lWBrACKgB/s1600/FullSizeRender_1.jpg','https://images.pexels.com/photos/1532704/pexels-photo-1532704.jpeg?cs=srgb&dl=pexels-steve-johnson-1532704.jpg&fm=jpg','https://tse2.mm.bing.net/th?id=OIP.zrqJK73o4NfeVz-mi7muWwHaFB&pid=Api&P=0&h=180','https://images.squarespace-cdn.com/content/v1/577e85abc534a5d5bcf943d2/1472153172370-JYVTR0APODH1QL9QQXF2/image-asset.jpeg']
  },
  { id: '4',
    name: 'Kiara geni',
    bio: 'Kiara geni is an pallete artist renowned for his bold exploration of color, form, and geometry. His works evoke deep emotional responses, utilizing vivid colors and dynamic shapes to challenge conventional perceptions of space and structure. Influenced by modernism and minimalism, John’s paintings often feature geometric abstraction, with an emphasis on sharp contrasts and symmetrical compositions. Over the years, his works have been showcased in various prestigious galleries around the world, earning critical acclaim for their expressive power and innovative use of color. John’s art invites viewers to engage with the emotional energy of each piece, offering a window into his creative process and inner world. Through his art, he seeks to inspire introspection and provoke thought, making the viewer reflect on their own relationship with color, space, and form.',
    image: "https://images.pexels.com/photos/8381944/pexels-photo-8381944.jpeg?auto=compress&cs=tinysrgb&h=750&w=12608",
    works: ['https://tse4.mm.bing.net/th?id=OIP.F7f9ORlwp-pz40uTp7PUtAHaHa&pid=Api&P=0&h=180', 'https://tse1.mm.bing.net/th?id=OIP.LWiGbQ2NoSFnFPAcM1ykmQHaHa&pid=Api&P=0&h=180','https://preview.redd.it/abstract-art-thick-oil-painting-springtime-v0-hee10jhh5ana1.png?auto=webp&s=15f2311a46566880e2424a218f5cf33342d845b5','https://i.pinimg.com/736x/a7/46/fb/a746fb1edf92f4bc62809b548c3424f9.jpg','https://i.pinimg.com/originals/78/a8/25/78a82545091c5e34e00cb3101ea5a4bf.jpg','http://3.bp.blogspot.com/-FCvGu8Hd7XU/UVGziNvzfWI/AAAAAAAAAbE/9ZR-iMe5k-8/s1600/abstract-art-original-landscape-painting-bold-colorful-design-shimmer-in-the-sky-by-madart-megan-duncanson.jpg']
  }
];


function ArtistDetail() {
  const { id } = useParams();  // Get the artist ID from the URL
  const artist = artistData.find(artist => artist.id === id);

  if (!artist) {
    return <h2>Artist not found!</h2>;
  }

  return (
    <div className="artist-detail-page">
      <h2>{artist.name}</h2>
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <p>{artist.bio}</p>
      <h3>Artworks</h3>
      <div className="artist-works">
        {artist.works.map((work, index) => (
          <img key={index} src={work} alt={`Artwork ${index + 1}`} className="artist-work" />
        ))}
      </div>
    </div>
  );
}

export default ArtistDetail;
