import bandPhoto1 from "@/assets/band-photo-1.jpg";
import bandPhoto2 from "@/assets/band-photo-2.jpg";
import bandPhoto3 from "@/assets/band-photo-3.jpg";

const galleryItems = [
  { type: "image", src: bandPhoto2, alt: "Live performance" },
  { type: "image", src: bandPhoto3, alt: "Guitar close-up" },
  { type: "video", videoId: "dQw4w9WgXcQ", title: "Latest Music Video" },
  { type: "image", src: bandPhoto1, alt: "Band portrait" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-display text-5xl md:text-7xl text-center mb-16">
          FOTO & <span className="text-primary">VIDEO</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden group ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {item.type === "image" ? (
                <>
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-video"
                    }`}
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
                </>
              ) : (
                <div className="relative aspect-video bg-secondary">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
