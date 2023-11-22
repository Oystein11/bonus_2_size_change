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

image3 = document.querySelector ("#img3_ID");
image3.addEventListener ("click", toggle_multiple_images);

function toggle_multiple_images () {
    let change2 = true;

    if (change2 = true) {
        image2.classList = "large_img";
        image3.classList = "large_img";
        change2 = false;
    } else {
        image2.classList = "small_img";
        image3.classList = "small_img";
        change2 = true;
    }
}