const lorem = `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis gravida leo facilisis luctus. Aenean a lectus urna. Suspendisse congue pretium velit, consectetur dictum nunc vulputate egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse iaculis magna a lectus fermentum commodo. Praesent leo ante, euismod ac justo ut, feugiat tempor purus. Proin nec congue lorem, ut mattis nulla. Morbi tempus mattis nisl in viverra. Suspendisse aliquet congue cursus. Praesent tempus facilisis quam, ac finibus est efficitur eu.
</p>

<p>
Mauris nec eros non mauris efficitur tempus. Aenean vel tempor arcu, a aliquam odio. Quisque tempus tortor et viverra ornare. Sed sollicitudin placerat purus et molestie. In libero dui, dignissim sed massa at, lacinia ornare tellus. Curabitur ut arcu rhoncus, ullamcorper odio sed, lobortis tellus. Fusce maximus leo non aliquam pellentesque. Donec ornare ligula id ullamcorper condimentum. Maecenas consequat neque ac metus porttitor, vitae sagittis ligula lobortis. Donec maximus elit magna, quis rutrum velit viverra vel. In ut dui auctor, condimentum orci ac, consequat lorem. Pellentesque condimentum quam ut hendrerit accumsan. Duis vel urna bibendum, tempus leo sed, viverra purus. Nunc id erat libero. Aliquam ornare luctus nisi vel tincidunt. Duis ac ullamcorper nibh, ac mollis tortor.
</p>

<p>
Aliquam rhoncus metus sit amet odio congue auctor. Curabitur sed vulputate sapien. Mauris posuere urna ut mollis hendrerit. Maecenas suscipit, enim quis porta mollis, dolor elit vehicula ante, id hendrerit magna metus eu tellus. Cras dignissim ex a sem aliquet consequat. Nullam commodo quis augue commodo dapibus. Mauris eleifend sapien at mauris venenatis, in sollicitudin tellus tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum volutpat arcu, id iaculis est suscipit vitae. Nam gravida a sapien elementum ultrices. Vivamus non magna vitae felis aliquam sodales. Aliquam dictum porta iaculis. Donec laoreet, mauris in imperdiet tristique, leo nulla tempus neque, id tincidunt tellus odio vel turpis. Proin pharetra accumsan nulla, eu ultrices justo. Vestibulum lectus lectus, maximus id sem eget, posuere vulputate felis. Fusce convallis lorem a ex luctus, quis molestie dolor ultricies.
</p>

<p>
Cras venenatis, dolor at vulputate laoreet, nunc lorem suscipit est, bibendum egestas est velit a justo. Nulla sed viverra ex. Aenean eget imperdiet erat. Phasellus dapibus consectetur mi, et aliquet orci iaculis sit amet. Morbi sodales, felis eu bibendum ultrices, est metus rutrum est, gravida viverra lorem eros id sapien. Nunc rutrum ut magna et vehicula. Vestibulum feugiat pulvinar sem, ut venenatis arcu mollis vitae. Fusce egestas posuere sollicitudin. Pellentesque ipsum nulla, dignissim eu ligula blandit, malesuada feugiat neque.
</p>

<p>
Curabitur congue blandit posuere. Proin varius dolor in ex vehicula, sit amet elementum velit molestie. Proin imperdiet erat lorem, ut bibendum dui mattis ac. Etiam venenatis, nulla et vestibulum facilisis, nisi erat malesuada erat, ut congue leo magna nec urna. Donec enim odio, congue et diam sit amet, rhoncus tempor ex. Praesent quis porttitor justo. Etiam feugiat feugiat nunc. Nam dapibus convallis libero a malesuada. Donec vitae est ultricies, tincidunt arcu facilisis, lacinia risus. Maecenas tincidunt cursus ornare. Nam bibendum semper arcu, ut aliquam nulla. Aenean convallis magna vel tincidunt rhoncus. Cras egestas vulputate lorem, non vulputate velit tincidunt dignissim. In rhoncus sapien vel ornare ornare.
</p>
`;

function codeAddress() {
    const content = document.getElementById("content");
    content.innerHTML = lorem + lorem;

    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = lorem + lorem;

    const aside = document.getElementById("aside");
    aside.innerHTML = lorem + lorem;
}
window.onload = codeAddress;

