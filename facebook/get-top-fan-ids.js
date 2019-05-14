/**
 * Author: JUNO_OKYO <junookyo.blogspot.com>
 * Follow me for more useful scripts:
 * -> fb.com/100003880469096
 * -> twitter.com/juno_okyo
 * -> github.com/J2TEAM
 */

((copy) => {
  function main() {
    let el = document.querySelector('.uiScrollableArea ul.uiList li:last-of-type');

    if (el !== null && el.nextElementSibling !== null && el.nextElementSibling.tagName === 'A') {
      el.nextElementSibling.click();
      setTimeout(main, 300);
    } else {
      let ids = [];

      Array.from(document.querySelectorAll('.uiScrollableArea ul li a[uid]')).map(el => {
        ids.push(el.getAttribute('uid'));
      });

      copy(ids.join('\n'));
      console.log('Done!');
    }
  }

  main();
})(copy);