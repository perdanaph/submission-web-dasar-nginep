// Javascript DOM - Navigasi
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.onclick = () => {
  navList.classList.add('active');
  menuBtn.classList.add('hide');
  cancelBtn.classList.add('show');
  body.classList.add('disabledScroll');
};

cancelBtn.onclick = () => {
  navList.classList.remove('active');
  menuBtn.classList.remove('hide');
  cancelBtn.classList.remove('show');
  body.classList.remove('disabledScroll');
};

// Page scroll Offset
$('.page-scroll').on('click', function (e) {
  let tujuan = $(this).attr('href');
  let elemenTujuan = $(tujuan);

  $('html').animate(
    {
      scrollTop: elemenTujuan.offset().top - 62,
    },
    1000
  );

  e.preventDefault();
});
