const images = [
      "https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/53581/bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/68550/thailand-elephant-sunset-nature-68550.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/460223/pexels-photo-460223.jpeg?auto=compress&cs=tinysrgb&w=800"
    ];

    let currentImageIndex = 0;
    const imageContainer = document.querySelector('.image-container img');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateGallery() {
      imageContainer.src = images[currentImageIndex];
      thumbnails.forEach((img, i) => {
        if (i === currentImageIndex) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    }

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        currentImageIndex = index;
        updateGallery();
      });
    });

    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateGallery();
    });

    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateGallery();
    });

    updateGallery();
