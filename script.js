image1 = document.querySelector ("#img1_ID");
image1.addEventListener ("click", toggle_one_image);

function toggle_one_image () {
    let change = true;

    if (change == true) {
        image1.classList = "large_img";
        change = false;
    } else {
        image1.classList = "small_img";
        change = true;
    }
}

image2 = document.querySelector ("#img2_ID");
image2.addEventListener ("click", toggle_multiple_images);

function toggle_multiple_images () {
    image2.style.height = "20em";
    image2.style.width = "20em";
}