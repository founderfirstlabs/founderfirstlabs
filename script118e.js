var options = { el: document.querySelector("#js-scroll"), smooth: true };
let posObj = {};
var points = [];

var bgColors = {
  yellow: "#FEDB86",
  pink: "#D16978",
  purple: "#5C5DB1",
  white: "#FCFCFF",
};

jQuery(window).on("load", function () {
  initPoints();

  posObj.firstSection = jQuery(".firstSec").length
    ? jQuery(".firstSec").offset().top
    : "";
  posObj.secondSection = jQuery(".secondSec").length
    ? jQuery(".secondSec").offset().top
    : "";
  posObj.thirdSection = jQuery(".thirdSec").length
    ? jQuery(".thirdSec").offset().top
    : "";
  posObj.fourthSection = jQuery(".fourthSec").length
    ? jQuery(".fourthSec").offset().top
    : "";
  posObj.fifthSection = jQuery(".fifthSec").length
    ? jQuery(".fifthSec").offset().top
    : "";

  posObj.sixthSection = jQuery(".sixthSec").length
    ? jQuery(".sixthSec").offset().top
    : "";

  posObj.seventhSection = jQuery(".seventhSec").length
    ? jQuery(".seventhSec").offset().top
    : "";

  if (jQuery(window).width() > 960) {
    let wh = window.innerHeight;
    var scroll = new LocomotiveScroll(options);
    scroll.on("scroll", (value, way) => {
      sectionBgChange(value.scroll.y);
      checkIllustrationPosition(value.scroll.y, wh);
      initCustomAnimation(value.scroll.y, wh);
    });
  } else {
    jQuery(window).on("scroll", function () {
      var scrollTop = jQuery(window).scrollTop();
      let wh = window.innerHeight;
      sectionBgChange(scrollTop);
      checkIllustrationPosition(scrollTop, wh);
      initCustomAnimation(scrollTop, wh);
    });
  }
  jQuery(window).on("resize", function () {
    jQuery(".fade-in-elements").each((ind, el) => {
      let point = el.getBoundingClientRect();
      points.map((oP, ind) => {
        if (oP.el == el) {
          points[ind] = { el, top: point.top, bottom: point.bottom, tl: oP.tl };
        }
      });
    });
  });
});
function initPoints() {
  jQuery(".fade-in-elements").each((ind, el) => {
    let point = el.getBoundingClientRect();
    let tl = new TimelineMax();
    if (el.dataset.name == "webdev") {
      tl.set(["#left_line", "#top_line", "#bottom_line"], {
        opacity: 0,
        scale: 0,
      })
        .set("#comp", { scale: 0, transformOrigin: "50% 50%" })
        .set(["#left_window", "#top_window", "#bottom_window"], {
          opacity: 0,
          y: 10,
          transformOrigin: "50% 50%",
        })
        .set("#left_panel", { scale: 0, transformOrigin: "100% 20%" })
        .set("#top_panel", { scale: 0, transformOrigin: "0% 70%" })
        .set("#bottom_panel", { scale: 0, transformOrigin: "0% 20%" })
        .pause()
        .to("#comp", 0.5, { scale: 1 }, "+=0.15")
        .to("#left_window", 0.3, { opacity: 1, y: 0 }, "+=0.15")
        .to("#top_window", 0.3, { opacity: 1, y: 0 }, "-=0.15")
        .to("#bottom_window", 0.3, { opacity: 1, y: 0 }, "-=0.15")
        .to("#left_panel", 0.3, { scale: 1, transformOrigin: "100% 20%" })
        .to(
          "#top_panel",
          0.3,
          { scale: 1, transformOrigin: "0% 70%" },
          "-=0.15"
        )
        .to(
          "#bottom_panel",
          0.3,
          { scale: 1, transformOrigin: "0% 20%" },
          "-=0.15"
        )
        .to(["#left_line", "#top_line", "#bottom_line"], 1, {
          opacity: 1,
          scale: 1,
        })
        .pause();
    }
    if (el.dataset.name == "mobdev") {
      tl.set(["#mobdev_phoneLeft", "#mobdev_phoneRight"], {
        opacity: 0,
        y: 10,
        transformOrigin: "50% 50%",
      })
        .set("#mobdev_topPanel", {
          opacity: 0,
          scale: 0,
          transformOrigin: "0% 20%",
        })
        .set("#mobdev_bottomPanel", {
          opacity: 0,
          scale: 0,
          transformOrigin: "0% 40%",
        })
        .set(["#mobdev_lines_0", "#mobdev_lines_1"], {
          opacity: 0,
          y: 10,
          scale: 0,
        })
        .pause()
        .to(
          ["#mobdev_phoneLeft", "#mobdev_phoneRight"],
          0.3,
          { opacity: 1, y: 0 },
          0.15
        )
        .to(
          ["#mobdev_topPanel", "#mobdev_bottomPanel"],
          0.3,
          { opacity: 1, scale: 1 },
          "-=0.15"
        )
        .to(["#mobdev_lines_0", "#mobdev_lines_1"], 1, {
          opacity: 1,
          y: 0,
          scale: 1,
        })
        .pause();
    }
    if (el.dataset.name == "cad") {
      tl.set("#img1", { opacity: 0, y: 500, x: 70, rotate: -10 })
        .set("#img2", { opacity: 0, y: 500, x: -70, rotate: 10 })
        .set("#leftPanel", { scale: 0, transformOrigin: "100% 10%" })
        .set(["#figma", "#ai", "#ae"], {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "50% 50%",
        })
        .set("#topPanel", { scale: 0, transformOrigin: "0% 60%" })
        .set("#bottomPanel", { scale: 0, transformOrigin: "0% 20%" })
        .set("#indicator", { fill: "transparent" })
        .set(["#circle", "#leftLine"], { opacity: 0 })
        .set("#face", { opacity: 0 })
        .set(["#leftLine", "#topLine", "#bottomLine"], {
          opacity: "0",
          scale: 0,
        })
        .pause()
        .to("#img1", 0.5, { opacity: 1, y: 0, x: 0, rotate: 0 })
        .to("#img2", 0.5, { opacity: 1, y: 0, x: 0, rotate: 0 }, "-=0.4")
        .to("#leftPanel", 0.3, { scale: 1 }, 0.5)
        .to("#figma", 0.3, { opacity: 1, scale: 1 }, "-=0.2")
        .to("#ai", 0.3, { opacity: 1, scale: 1 }, "-=0.2")
        .to("#ae", 0.3, { opacity: 1, scale: 1 }, "-=0.2")
        .to("#topPanel", 0.3, { scale: 1 }, 0.8)
        .to("#bottomPanel", 0.3, { scale: 1 }, 1)
        .to("#indicator", 0.7, { fill: "#D16978" }, 1)
        .to("#circle", 1, { ease: "none", opacity: "1", stagger: 0.1 }, "-=1")
        .to("#face", 0.7, { opacity: 1 })
        .to(["#leftLine", "#topLine", "#bottomLine"], 1, {
          opacity: "1",
          scale: 1,
        })
        .pause();
    }
    if (el.dataset.name == "tech") {
      tl.set("#tech_window", { opacity: 0, y: 10, transformOrigin: "50% 50%" })
        .set("#tech_left_panel", {
          opacity: 0,
          scale: 0,
          transformOrigin: "100% 20%",
        })
        .set("#tech_top_panel", {
          opacity: 0,
          scale: 0,
          transformOrigin: "0% 70%",
        })
        .set("#tech_bottom_panel", {
          opacity: 0,
          scale: 0,
          transformOrigin: "0% 20%",
        })
        .set(["#tech_left_items_0", "#tech_left_items_1"], {
          opacity: 0,
          scale: 0.8,
          transformOrigin: "50% 50%",
        })
        .set(["#tech_left_line", "#tech_top_line", "#tech_bottom_line"], {
          opacity: 0,
          scale: 0,
          x: 20,
        })
        .pause()
        .to("#tech_window", 0.3, { opacity: 1, y: 0 })
        .to("#tech_left_panel", 0.3, { opacity: 1, scale: 1 })
        .to("#tech_top_panel", 0.3, { opacity: 1, scale: 1 }, "-=0.15")
        .to("#tech_bottom_panel", 0.3, { opacity: 1, scale: 1 }, "-=0.15")
        .to("#tech_left_items_0", 0.3, { opacity: 1, scale: 1, x: 0 }, 0.6)
        .to("#tech_left_items_1", 0.3, { opacity: 1, scale: 1, x: 0 }, "-=0.2")
        .to(
          ["#tech_left_line", "#tech_top_line", "#tech_bottom_line"],
          1,
          { opacity: 0, scale: 0, x: 20 },
          1
        )
        .pause();
    }
    points.push({ el, top: point.top, bottom: point.bottom, tl: tl });
  });
}
function checkIllustrationPosition(top, wh) {
  points.map((item) => {
    if (top >= item.top - wh / 1.3) {
      if (!item?.started) {
        item.started = true;
        item.tl.resume();
        item.el.classList.add("animated");
      }
    }
  });
}
function sectionBgChange(scrollPos) {
  let wh = window.innerHeight;
  var threshold = 0.5;
  scrollsInit(scrollPos, wh);

  if (jQuery("main#home_page").length) {
    if (
      scrollPos >= posObj.firstSection &&
      scrollPos + wh * threshold < posObj.secondSection
    ) {
      jQuery("body").removeClass("wt");
      jQuery(".wrap").css("background-color", bgColors.white);
    } else if (
      scrollPos >= posObj.secondSection &&
      scrollPos + wh * threshold < posObj.thirdSection
    ) {
      jQuery("body").removeClass("wt");
      jQuery(".wrap").css("background-color", bgColors.yellow);
    } else if (
      scrollPos >= posObj.thirdSection &&
      scrollPos + wh * threshold <= posObj.fourthSection
    ) {
      jQuery("body").removeClass("wt");
      jQuery(".wrap").css("background-color", bgColors.purple);
    } else if (
      scrollPos >= posObj.fourthSection &&
      scrollPos + wh * threshold <= posObj.fifthSection
    ) {
      jQuery("body").removeClass("wt");
      jQuery(".wrap").css("background-color", bgColors.pink);
    } else if (
      scrollPos >= posObj.fifthSection &&
      scrollPos + wh * threshold <= posObj.sixthSection
    ) {
      jQuery("body").addClass("wt");
      jQuery(".wrap").css("background-color", bgColors.purple);
    } else if (
      scrollPos >= posObj.sixthSection &&
      scrollPos + wh * threshold <= posObj.seventhSection
    ) {
      jQuery("body").addClass("wt");
      jQuery(".wrap").css("background-color", bgColors.pink);
    } else if (scrollPos >= posObj.seventhSection) {
      jQuery("body").addClass("wt");
      jQuery(".wrap").css("background-color", bgColors.purple);
    }

    if (scrollPos > 200) {
      jQuery("header").addClass("changerBg");
    } else {
      jQuery("header").removeClass("changerBg");
    }
  }
}
function scrollsInit(scrollPos, wh) {
  if (jQuery("main").is("#home_page") || jQuery("main").is("#design_page")) {
    if (scrollPos < wh - jQuery(".scrDwn").offset().top)
      jQuery(".scrDwn").fadeOut();
  }
}

var animationData = {
  v: "5.6.1",
  fr: 30,
  ip: 0,
  op: 20,
  w: 75,
  h: 45,
  nm: "Comp 1",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Layer 10 :M",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [-5], h: 1 },
            { t: 9.667, s: [5], h: 1 },
            { t: 20, s: [-5], h: 1 },
            { t: 29, s: [5], h: 1 },
          ],
          ix: 10,
        },
        p: { a: 0, k: [37.362, 21.609, 0], ix: 2 },
        a: { a: 0, k: [37.362, 17.109, 0], ix: 1 },
        s: { a: 0, k: [41, 41, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-0.806, -0.577],
                        [0, 0],
                        [0.425, 2.643],
                        [2.473, -0.712],
                      ],
                      o: [
                        [1.353, 0.966],
                        [1.068, -0.941],
                        [-2.553, 0.323],
                        [-0.2, 2.425],
                      ],
                      v: [
                        [-3.734, 1.993],
                        [3.119, 1.798],
                        [3.301, -5.705],
                        [-4.249, -4.15],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-1.255, 2.321],
                        [0.533, 2.102],
                        [1.563, 0.129],
                        [0.977, -0.101],
                        [0, 0],
                      ],
                      o: [
                        [0.734, -1.361],
                        [-1.527, -0.357],
                        [-0.982, -0.011],
                        [0.273, 3.323],
                        [0, 0],
                      ],
                      v: [
                        [12.372, 1.519],
                        [12.081, -4.769],
                        [7.441, -5.499],
                        [4.5, -5.364],
                        [5.713, 2.485],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 110",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-6.144, -0.17],
                        [0.679, -6.665],
                        [9.042, 7.693],
                      ],
                      o: [
                        [0, 0],
                        [-0.679, 6.665],
                        [-9.043, -7.689],
                      ],
                      v: [
                        [3.754, -7.673],
                        [16.38, -0.152],
                        [-14.161, 3.778],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [41.39, 24.183], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 9",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.474, -0.966],
                        [0.88, 0.638],
                        [11.632, 2.048],
                        [17.491, -6.191],
                        [2.656, 2.43],
                        [-2.183, 3.336],
                        [-3.354, 3.207],
                        [-2.717, 1.58],
                        [-5.81, 2.358],
                        [-3.081, 0.868],
                        [-7.223, 0.115],
                        [-5.021, -0.583],
                        [-5.749, -1.362],
                        [-3.736, -2.345],
                        [-4.591, -5.474],
                        [-0.976, -1.786],
                      ],
                      o: [
                        [-1.164, 0.76],
                        [-8.054, -5.869],
                        [-4.852, -0.85],
                        [-11.735, 4.15],
                        [-1.868, -1.707],
                        [1.104, -1.689],
                        [5.61, -5.329],
                        [3.693, -2.144],
                        [4.446, -1.822],
                        [5.13, -1.44],
                        [6.004, -0.092],
                        [4.597, 0.535],
                        [6.72, 1.585],
                        [0.94, 0.608],
                        [4.943, 5.893],
                        [2.026, 3.876],
                      ],
                      v: [
                        [46.831, 14.758],
                        [42.198, 12.728],
                        [13.088, 3.159],
                        [-25.313, 5.863],
                        [-46.539, 14.758],
                        [-44.993, 4.32],
                        [-39.977, -0.54],
                        [-32.451, -8.275],
                        [-21.681, -11.125],
                        [-14.694, -14.848],
                        [-0.8, -13.493],
                        [10.583, -15.037],
                        [20.717, -11.427],
                        [33.162, -9.435],
                        [38.565, -3.244],
                        [44.933, 4.654],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [35.791, 10.027], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 8",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [1.425, -5.608],
                        [-1.546, 3.961],
                      ],
                      o: [
                        [0, 0],
                        [-1.426, 5.608],
                        [1.547, -3.961],
                      ],
                      v: [
                        [27.372, -38.116],
                        [21.095, -32.8],
                        [28.336, -33.189],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.461, 2.801],
                        [2.22, -1.258],
                        [-2.784, -2.612],
                      ],
                      o: [
                        [0, 0],
                        [-2.22, 1.257],
                        [2.783, 2.613],
                      ],
                      v: [
                        [-24.948, -34.084],
                        [-29.388, -39.4],
                        [-28.423, -29.54],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 4,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 7",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 4,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-27.744, -33.244],
                        [-20.412, -21.257],
                      ],
                      c: false,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [25.115, -34.283],
                        [18.687, -22.296],
                      ],
                      c: false,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 6",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 5,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.529, 0.673],
                        [-0.708, 0.556],
                        [-0.556, -0.708],
                        [-0.021, -0.031],
                        [0.745, -0.506],
                      ],
                      o: [
                        [-0.556, -0.708],
                        [0.708, -0.556],
                        [0.023, 0.03],
                        [0.506, 0.745],
                        [-0.708, 0.481],
                      ],
                      v: [
                        [-39.942, -9.325],
                        [-39.667, -11.614],
                        [-37.379, -11.339],
                        [-37.312, -11.248],
                        [-37.744, -8.984],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.726, 0.531],
                        [-0.531, -0.726],
                        [0.726, -0.531],
                        [0.531, 0.726],
                        [0, 0],
                      ],
                      o: [
                        [-0.531, -0.726],
                        [0.726, -0.531],
                        [0.531, 0.726],
                        [-0.726, 0.531],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-31.539, 11.74],
                        [-31.186, 9.463],
                        [-28.909, 9.816],
                        [-29.262, 12.092],
                        [-31.539, 11.739],
                        [-31.539, 11.739],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.937254905701, 0.937254905701, 0.96862745285, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 5",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 6,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.726, 0.531],
                        [-0.531, -0.726],
                        [0.726, -0.531],
                        [0.531, 0.726],
                        [0, 0],
                      ],
                      o: [
                        [-0.531, -0.726],
                        [0.726, -0.531],
                        [0.531, 0.726],
                        [-0.726, 0.531],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-41.539, 2.74],
                        [-41.186, 0.463],
                        [-38.909, 0.816],
                        [-39.262, 3.092],
                        [-41.539, 2.739],
                        [-41.539, 2.739],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.529, 0.673],
                        [-0.708, 0.556],
                        [-0.556, -0.708],
                        [-0.021, -0.031],
                        [0.745, -0.506],
                      ],
                      o: [
                        [-0.556, -0.708],
                        [0.708, -0.556],
                        [0.023, 0.03],
                        [0.506, 0.745],
                        [-0.708, 0.481],
                      ],
                      v: [
                        [27.164, 2.483],
                        [27.439, 0.194],
                        [29.727, 0.469],
                        [29.794, 0.56],
                        [29.361, 2.824],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 2,
                  ty: "sh",
                  ix: 3,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.888, 1.206],
                        [-1.211, 0.892],
                        [-0.892, -1.211],
                        [-0.003, -0.004],
                        [1.216, -0.884],
                      ],
                      o: [
                        [-0.892, -1.211],
                        [1.211, -0.892],
                        [0.003, 0.004],
                        [0.884, 1.216],
                        [-1.211, 0.881],
                      ],
                      v: [
                        [22.799, 6.193],
                        [23.377, 2.386],
                        [27.184, 2.964],
                        [27.194, 2.977],
                        [26.593, 6.781],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 3",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 3,
                  ty: "sh",
                  ix: 4,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.048, 1.389],
                        [-1.419, 1.071],
                        [-1.071, -1.419],
                        [-0.019, -0.026],
                        [1.451, -1.028],
                      ],
                      o: [
                        [-1.071, -1.419],
                        [1.419, -1.071],
                        [0.02, 0.026],
                        [1.028, 1.451],
                        [-1.42, 1.006],
                      ],
                      v: [
                        [-28.246, 13.362],
                        [-27.616, 8.853],
                        [-23.107, 9.484],
                        [-23.05, 9.562],
                        [-23.816, 14.049],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 4",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 4,
                  ty: "sh",
                  ix: 5,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.049, 1.435],
                        [-1.435, 1.049],
                        [-1.049, -1.435],
                        [1.435, -1.049],
                      ],
                      o: [
                        [-1.049, -1.435],
                        [1.435, -1.049],
                        [1.049, 1.435],
                        [-1.435, 1.049],
                      ],
                      v: [
                        [-6.518, 17.901],
                        [-5.82, 13.403],
                        [-1.322, 14.101],
                        [-2.02, 18.599],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 5",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 5,
                  ty: "sh",
                  ix: 6,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [1.049, 1.435],
                        [-1.435, 1.049],
                        [-1.049, -1.435],
                        [1.435, -1.049],
                      ],
                      o: [
                        [-1.049, -1.435],
                        [1.435, -1.049],
                        [1.049, 1.435],
                        [-1.435, 1.049],
                      ],
                      v: [
                        [16.399, 14.897],
                        [17.097, 10.399],
                        [21.595, 11.097],
                        [20.897, 15.595],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 6",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 6,
                  ty: "sh",
                  ix: 7,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.454, 0.621],
                        [-0.621, 0.454],
                        [-0.454, -0.621],
                        [0.621, -0.454],
                      ],
                      o: [
                        [-0.454, -0.621],
                        [0.621, -0.454],
                        [0.454, 0.621],
                        [-0.621, 0.454],
                      ],
                      v: [
                        [-17.919, 16.335],
                        [-17.617, 14.388],
                        [-15.67, 14.69],
                        [-15.972, 16.637],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 7",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.937254905701, 0.937254905701, 0.96862745285, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 8,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 4",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 7,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.453, 0.586],
                        [-0.609, 0.471],
                        [-0.471, -0.609],
                        [-0.014, -0.02],
                        [0.633, -0.437],
                      ],
                      o: [
                        [-0.471, -0.609],
                        [0.609, -0.471],
                        [0.015, 0.02],
                        [0.437, 0.633],
                        [-0.609, 0.421],
                      ],
                      v: [
                        [-0.94, 21.641],
                        [-0.69, 19.687],
                        [1.264, 19.937],
                        [1.308, 19.997],
                        [0.954, 21.935],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.454, 0.606],
                        [-0.616, 0.461],
                        [-0.461, -0.616],
                        [-0.006, -0.009],
                        [0.626, -0.447],
                      ],
                      o: [
                        [-0.461, -0.616],
                        [0.616, -0.461],
                        [0.006, 0.009],
                        [0.447, 0.626],
                        [-0.616, 0.439],
                      ],
                      v: [
                        [2.713, 16.573],
                        [2.993, 14.623],
                        [4.943, 14.903],
                        [4.962, 14.929],
                        [4.637, 16.872],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 2,
                  ty: "sh",
                  ix: 3,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.453, 0.586],
                        [-0.609, 0.471],
                        [-0.471, -0.609],
                        [-0.014, -0.02],
                        [0.633, -0.437],
                      ],
                      o: [
                        [-0.471, -0.609],
                        [0.609, -0.471],
                        [0.015, 0.02],
                        [0.437, 0.633],
                        [-0.609, 0.421],
                      ],
                      v: [
                        [-2.945, 14.803],
                        [-2.695, 12.849],
                        [-0.741, 13.099],
                        [-0.697, 13.159],
                        [-1.051, 15.097],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 3",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 3,
                  ty: "sh",
                  ix: 4,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.453, 0.586],
                        [-0.609, 0.471],
                        [-0.471, -0.609],
                        [-0.014, -0.02],
                        [0.633, -0.437],
                      ],
                      o: [
                        [-0.471, -0.609],
                        [0.609, -0.471],
                        [0.015, 0.02],
                        [0.437, 0.633],
                        [-0.609, 0.421],
                      ],
                      v: [
                        [20.141, 10.944],
                        [20.391, 8.99],
                        [22.345, 9.24],
                        [22.389, 9.3],
                        [22.035, 11.238],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 4",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 4,
                  ty: "sh",
                  ix: 5,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.225, 0.317],
                        [-0.31, 0.235],
                        [-0.225, -0.318],
                        [0.31, -0.235],
                      ],
                      o: [
                        [-0.235, -0.311],
                        [0.318, -0.224],
                        [0.234, 0.311],
                        [-0.318, 0.225],
                      ],
                      v: [
                        [22.723, 2.503],
                        [22.86, 1.515],
                        [23.843, 1.684],
                        [23.706, 2.671],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 5",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 5,
                  ty: "sh",
                  ix: 6,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.225, 0.317],
                        [-0.311, 0.235],
                        [0, 0],
                        [-0.225, -0.317],
                        [0, 0],
                        [0.31, -0.235],
                      ],
                      o: [
                        [-0.235, -0.311],
                        [0, 0],
                        [0.317, -0.225],
                        [0, 0],
                        [0.234, 0.31],
                        [-0.318, 0.225],
                      ],
                      v: [
                        [16.587, 6.835],
                        [16.724, 5.847],
                        [16.725, 5.847],
                        [17.706, 6.015],
                        [17.707, 6.016],
                        [17.57, 7.003],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 6",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 6,
                  ty: "sh",
                  ix: 7,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.225, 0.318],
                        [-0.31, 0.235],
                        [-0.233, -0.318],
                        [0.31, -0.235],
                        [0, 0],
                      ],
                      o: [
                        [-0.234, -0.31],
                        [0.309, -0.226],
                        [0.235, 0.31],
                        [0, 0],
                        [-0.318, 0.224],
                      ],
                      v: [
                        [10.35, 12.352],
                        [10.487, 11.365],
                        [11.469, 11.533],
                        [11.332, 12.521],
                        [11.332, 12.521],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 7",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 7,
                  ty: "sh",
                  ix: 8,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.445, 0.608],
                        [-0.589, 0.431],
                        [-0.445, -0.608],
                        [0.589, -0.431],
                      ],
                      o: [
                        [-0.445, -0.609],
                        [0.59, -0.431],
                        [0.445, 0.609],
                        [-0.59, 0.431],
                      ],
                      v: [
                        [13.704, 18.848],
                        [13.965, 16.966],
                        [15.838, 17.287],
                        [15.577, 19.169],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 8",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 8,
                  ty: "sh",
                  ix: 9,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.342, 0.468],
                        [-0.452, 0.331],
                        [-0.342, -0.468],
                        [0.452, -0.331],
                      ],
                      o: [
                        [-0.342, -0.468],
                        [0.454, -0.332],
                        [0.342, 0.468],
                        [-0.454, 0.332],
                      ],
                      v: [
                        [-31.463, 6.146],
                        [-31.263, 4.699],
                        [-29.822, 4.946],
                        [-30.022, 6.393],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 9",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 9,
                  ty: "sh",
                  ix: 10,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.225, 0.318],
                        [-0.311, 0.235],
                        [-0.225, -0.317],
                        [0, 0],
                        [0.31, -0.235],
                        [0, 0],
                      ],
                      o: [
                        [-0.234, -0.311],
                        [0.317, -0.225],
                        [0, 0],
                        [0.235, 0.31],
                        [0, 0],
                        [-0.318, 0.224],
                      ],
                      v: [
                        [36.922, 3.897],
                        [37.06, 2.91],
                        [38.041, 3.077],
                        [38.042, 3.078],
                        [37.905, 4.066],
                        [37.905, 4.066],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 10",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 10,
                  ty: "sh",
                  ix: 11,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.311, 0.235],
                        [-0.233, -0.318],
                        [0.31, -0.235],
                        [0, 0],
                        [0.225, 0.318],
                      ],
                      o: [
                        [-0.234, -0.311],
                        [0.309, -0.226],
                        [0.235, 0.31],
                        [0, 0],
                        [-0.318, 0.225],
                        [0, 0],
                      ],
                      v: [
                        [-37.078, 7.897],
                        [-36.94, 6.91],
                        [-35.958, 7.078],
                        [-36.095, 8.066],
                        [-36.095, 8.066],
                        [-37.078, 7.897],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 11",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 11,
                  ty: "sh",
                  ix: 12,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.311, 0.235],
                        [-0.233, -0.318],
                        [0.31, -0.235],
                        [0, 0],
                        [0.225, 0.318],
                      ],
                      o: [
                        [-0.234, -0.311],
                        [0.309, -0.226],
                        [0.235, 0.31],
                        [0, 0],
                        [-0.318, 0.225],
                        [0, 0],
                      ],
                      v: [
                        [-11.078, 18.897],
                        [-10.94, 17.91],
                        [-9.958, 18.078],
                        [-10.095, 19.066],
                        [-10.095, 19.066],
                        [-11.078, 18.897],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 12",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 12,
                  ty: "sh",
                  ix: 13,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.31, 0.235],
                        [-0.233, -0.319],
                        [0.31, -0.235],
                        [0, 0],
                        [0.225, 0.318],
                      ],
                      o: [
                        [-0.234, -0.31],
                        [0.31, -0.227],
                        [0.235, 0.31],
                        [0, 0],
                        [-0.318, 0.225],
                        [0, 0],
                      ],
                      v: [
                        [-21.405, 11.069],
                        [-21.268, 10.082],
                        [-20.285, 10.25],
                        [-20.422, 11.238],
                        [-20.422, 11.238],
                        [-21.405, 11.069],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 13",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 13,
                  ty: "sh",
                  ix: 14,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.31, 0.235],
                        [0, 0],
                        [-0.233, -0.319],
                        [0.31, -0.235],
                        [0.225, 0.318],
                      ],
                      o: [
                        [-0.235, -0.31],
                        [0, 0],
                        [0.31, -0.226],
                        [0.234, 0.31],
                        [-0.318, 0.225],
                        [0, 0],
                      ],
                      v: [
                        [-18.165, 14.495],
                        [-18.028, 13.507],
                        [-18.028, 13.507],
                        [-17.045, 13.676],
                        [-17.182, 14.663],
                        [-18.165, 14.495],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 14",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 14,
                  ty: "sh",
                  ix: 15,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.311, 0.235],
                        [0, 0],
                        [-0.233, -0.32],
                        [0.31, -0.235],
                        [0.225, 0.318],
                        [0, 0],
                      ],
                      o: [
                        [-0.235, -0.311],
                        [0, 0],
                        [0.309, -0.226],
                        [0.234, 0.31],
                        [-0.318, 0.225],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-21.834, 5.366],
                        [-21.697, 4.378],
                        [-21.696, 4.378],
                        [-20.714, 4.548],
                        [-20.851, 5.535],
                        [-21.834, 5.366],
                        [-21.834, 5.365],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 15",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 15,
                  ty: "sh",
                  ix: 16,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.31, 0.235],
                        [0, 0],
                        [-0.233, -0.32],
                        [0.31, -0.235],
                        [0.225, 0.318],
                        [0, 0],
                      ],
                      o: [
                        [-0.235, -0.31],
                        [0, 0],
                        [0.31, -0.226],
                        [0.234, 0.31],
                        [-0.318, 0.225],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-10.554, 10.825],
                        [-10.417, 9.837],
                        [-10.417, 9.837],
                        [-9.434, 10.007],
                        [-9.571, 10.994],
                        [-10.554, 10.825],
                        [-10.554, 10.824],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 16",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 16,
                  ty: "sh",
                  ix: 17,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.31, 0.235],
                        [-0.225, -0.318],
                        [0.31, -0.235],
                        [0.225, 0.318],
                      ],
                      o: [
                        [-0.235, -0.311],
                        [0.318, -0.224],
                        [0.234, 0.311],
                        [-0.318, 0.224],
                        [0, 0],
                      ],
                      v: [
                        [26.868, -2.884],
                        [27.005, -3.872],
                        [27.988, -3.702],
                        [27.851, -2.715],
                        [26.868, -2.885],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 17",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 17,
                  ty: "sh",
                  ix: 18,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.454, 0.606],
                        [-0.616, 0.461],
                        [-0.461, -0.616],
                        [-0.006, -0.009],
                        [0.626, -0.447],
                      ],
                      o: [
                        [-0.461, -0.616],
                        [0.616, -0.461],
                        [0.006, 0.009],
                        [0.447, 0.626],
                        [-0.616, 0.439],
                      ],
                      v: [
                        [7.076, 15.866],
                        [7.356, 13.916],
                        [9.306, 14.196],
                        [9.325, 14.222],
                        [9, 16.165],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 18",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 18,
                  ty: "sh",
                  ix: 19,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.454, 0.606],
                        [-0.616, 0.461],
                        [-0.461, -0.616],
                        [-0.006, -0.009],
                        [0.626, -0.447],
                      ],
                      o: [
                        [-0.461, -0.616],
                        [0.616, -0.461],
                        [0.006, 0.009],
                        [0.447, 0.626],
                        [-0.616, 0.439],
                      ],
                      v: [
                        [14.505, 11.975],
                        [14.785, 10.025],
                        [16.735, 10.305],
                        [16.754, 10.331],
                        [16.429, 12.274],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 19",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 19,
                  ty: "sh",
                  ix: 20,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.627, 0.921],
                        [0.968, -0.658],
                        [-0.658, -0.968],
                        [-0.03, -0.038],
                        [-0.921, 0.723],
                      ],
                      o: [
                        [-0.658, -0.968],
                        [-0.968, 0.658],
                        [0.027, 0.04],
                        [0.723, 0.921],
                        [0.876, -0.688],
                      ],
                      v: [
                        [34.171, 6.211],
                        [31.226, 5.65],
                        [30.665, 8.595],
                        [30.751, 8.713],
                        [33.728, 9.07],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 20",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 20,
                  ty: "sh",
                  ix: 21,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0.944, -0.691],
                        [-0.691, -0.944],
                        [-0.944, 0.69],
                        [0.69, 0.944],
                        [0, 0],
                      ],
                      o: [
                        [-0.691, -0.944],
                        [-0.944, 0.691],
                        [0.69, 0.944],
                        [0.944, -0.69],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-32.81, -1.965],
                        [-35.771, -2.424],
                        [-36.23, 0.536],
                        [-33.27, 0.996],
                        [-32.81, -1.964],
                        [-32.81, -1.964],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 21",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 21,
                  ty: "sh",
                  ix: 22,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0.944, -0.691],
                        [-0.691, -0.944],
                        [-0.944, 0.691],
                        [0.691, 0.944],
                      ],
                      o: [
                        [-0.691, -0.944],
                        [-0.944, 0.691],
                        [0.691, 0.944],
                        [0.944, -0.691],
                        [0, 0],
                      ],
                      v: [
                        [-38.91, -5.115],
                        [-41.87, -5.575],
                        [-42.33, -2.614],
                        [-39.37, -2.154],
                        [-38.91, -5.115],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 22",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 22,
                  ty: "sh",
                  ix: 23,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.662, 0.934],
                        [0.955, -0.676],
                        [-0.676, -0.955],
                        [-0.013, -0.017],
                        [-0.934, 0.705],
                      ],
                      o: [
                        [-0.676, -0.955],
                        [-0.955, 0.676],
                        [0.013, 0.018],
                        [0.705, 0.934],
                        [0.913, -0.69],
                      ],
                      v: [
                        [-11.943, 14.236],
                        [-14.897, 13.731],
                        [-15.402, 16.685],
                        [-15.363, 16.738],
                        [-12.395, 17.151],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 23",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 23,
                  ty: "sh",
                  ix: 24,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0.662, 0.934],
                        [0.955, -0.676],
                        [-0.676, -0.955],
                        [-0.013, -0.017],
                        [-0.934, 0.705],
                      ],
                      o: [
                        [-0.676, -0.955],
                        [-0.955, 0.676],
                        [0.013, 0.018],
                        [0.705, 0.934],
                        [0.913, -0.69],
                      ],
                      v: [
                        [35.389, -2.443],
                        [32.435, -2.948],
                        [31.93, 0.006],
                        [31.969, 0.059],
                        [34.937, 0.472],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 24",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: {
                    a: 0,
                    k: [0.937254905701, 0.937254905701, 0.96862745285, 1],
                    ix: 4,
                  },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 25,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 3",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 8,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-0.183, 1.299],
                        [2.42, 0.905],
                        [3.821, -0.845],
                        [-0.194, -8.797],
                        [-3.208, -3.298],
                        [-9.552, -2.574],
                        [-4.937, 1.185],
                        [-10.643, 8.791],
                        [-0.449, 1.014],
                      ],
                      o: [
                        [0.584, -1.175],
                        [0.419, -6.974],
                        [-19.188, -7.17],
                        [-11.93, 2.551],
                        [0.049, 2.297],
                        [6.769, 7.214],
                        [13.658, 3.7],
                        [0, 0],
                        [4.458, -3.694],
                        [0, 0],
                      ],
                      v: [
                        [44.669, 0.147],
                        [45.827, -3.589],
                        [27.3, -17.805],
                        [-13.727, -20.606],
                        [-45.833, -1.985],
                        [-40.981, 5.305],
                        [-16.014, 20.277],
                        [13.922, 20.277],
                        [38.137, 8.302],
                        [44.669, 0.149],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [35.831, 23.063], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 2",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 9,
          mn: "ADBE Vector Group",
          hd: false,
        },
        {
          ty: "gr",
          it: [
            {
              ty: "gr",
              it: [
                {
                  ind: 0,
                  ty: "sh",
                  ix: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [-1.035, -0.863],
                        [0.59, -1.768],
                        [1.841, -2.358],
                        [-2.512, 5.493],
                        [-1.423, 1.095],
                      ],
                      o: [
                        [-0.202, 1.853],
                        [-0.948, 2.837],
                        [-0.39, -0.67],
                        [0.756, -1.629],
                        [1.042, 0.866],
                      ],
                      v: [
                        [-18.896, 15.443],
                        [-20.088, 20.891],
                        [-24.302, 28.741],
                        [-25.33, 16.996],
                        [-22.012, 12.85],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 1",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 1,
                  ty: "sh",
                  ix: 2,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [1.302, -1.538],
                        [2.814, -1.645],
                        [-4.748, 4.522],
                        [-1.888, 0.54],
                      ],
                      o: [
                        [-0.946, 1.78],
                        [-2.108, 2.485],
                        [-0.135, -0.832],
                        [1.432, -1.343],
                        [0, 0],
                      ],
                      v: [
                        [-27.5, 13.908],
                        [-30.882, 18.899],
                        [-38.318, 25.139],
                        [-34.72, 13.005],
                        [-29.669, 10.139],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 2,
                  ty: "sh",
                  ix: 3,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0.267, -2.511],
                        [1.287, -1.374],
                        [0.67, 1.905],
                        [0.097, 2.119],
                        [0, 0],
                      ],
                      o: [
                        [1.613, 2.043],
                        [-0.243, 1.867],
                        [-1.152, -1.659],
                        [-0.703, -2.002],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [16.492, 16.69],
                        [18.59, 23.792],
                        [16.237, 28.777],
                        [13.492, 23.407],
                        [12.286, 17.192],
                        [16.492, 16.689],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 3",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 3,
                  ty: "sh",
                  ix: 4,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-1.477, -4.564],
                        [0.687, -2.29],
                        [1.74, 1.801],
                        [1.22, 2.367],
                        [0, 0],
                      ],
                      o: [
                        [0.788, 0.414],
                        [0.72, 2.28],
                        [-2.158, -1.271],
                        [-1.845, -1.919],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [25.873, 11.139],
                        [31.947, 18.126],
                        [31.997, 25.139],
                        [26.122, 20.509],
                        [21.5, 14.046],
                        [25.873, 11.138],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 4",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 4,
                  ty: "sh",
                  ix: 5,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [-2.353, 2.734],
                        [-3.857, 0.936],
                        [-2.123, 1.791],
                        [-1.085, 0.425],
                        [-1.365, -1.221],
                        [-0.934, -0.608],
                        [-1.407, -1.093],
                        [-1.183, -2.138],
                        [-0.789, -1.215],
                        [1.067, -3.682],
                        [0, 0],
                        [0, 0],
                        [5.423, -0.173],
                        [3.942, 3.029],
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [10.34, 0.492],
                        [2.687, -3.13],
                        [2.287, -0.565],
                        [1.073, -0.906],
                        [1.71, -0.668],
                        [1.103, 0.979],
                        [1.898, 1.215],
                        [1.025, 0.796],
                        [0.952, 1.732],
                        [0.788, 1.215],
                        [0, 0],
                        [0, 0],
                        [-3.932, 3.74],
                        [-4.971, 0.087],
                        [0, 0],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [33.618, -5.474],
                        [50.987, -10.498],
                        [58.264, -18.883],
                        [65.015, -20.334],
                        [67.137, -22.364],
                        [72.444, -20.912],
                        [74.184, -18.882],
                        [79.199, -18.111],
                        [80.74, -14.15],
                        [83.348, -11.057],
                        [83.639, -4.192],
                        [56.409, -5.474],
                        [80.061, -0.425],
                        [65.536, 5.65],
                        [51.769, 1.106],
                        [34.018, -0.437],
                        [33.618, -5.474],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 5",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ind: 5,
                  ty: "sh",
                  ix: 6,
                  ks: {
                    a: 0,
                    k: {
                      i: [
                        [0, 0],
                        [0.982, 1.717],
                        [2.625, 2.6],
                        [1.821, 1.765],
                        [1.361, 0.576],
                        [3.263, -0.436],
                        [2.186, -1.103],
                        [2.082, -1.281],
                        [1.238, -1.066],
                        [-0.236, -3.382],
                        [0, 0],
                        [2.656, -0.029],
                        [4.121, 0.473],
                        [-5.862, -0.586],
                        [-1.021, 0.787],
                        [0, 0],
                      ],
                      o: [
                        [-6.415, -0.302],
                        [-1.697, -2.926],
                        [-1.17, -1.166],
                        [-1.925, -1.867],
                        [-1.525, -0.648],
                        [-3.878, 0.518],
                        [-1.604, 0.806],
                        [-2.206, 1.376],
                        [-0.879, 0.753],
                        [0, 0],
                        [-2.645, 0.243],
                        [-4.148, 0.045],
                        [2.206, 5.81],
                        [5.863, 0.585],
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-43.5, -4.736],
                        [-53.315, -8.573],
                        [-55.575, -17.558],
                        [-59.34, -20.153],
                        [-62.483, -23.665],
                        [-67.976, -22.749],
                        [-75.042, -22.442],
                        [-78.338, -19.563],
                        [-82.893, -17.577],
                        [-84.463, -11.931],
                        [-60.953, -8.185],
                        [-68.908, -7.777],
                        [-81.324, -8.42],
                        [-68.134, 2.067],
                        [-56.977, -1.263],
                        [-44.206, -0.96],
                      ],
                      c: true,
                    },
                    ix: 2,
                  },
                  nm: "Path 6",
                  mn: "ADBE Vector Shape - Group",
                  hd: false,
                },
                {
                  ty: "st",
                  c: {
                    a: 0,
                    k: [0.321568638086, 0.32549020648, 0.458823531866, 1],
                    ix: 3,
                  },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 1, ix: 5 },
                  lc: 2,
                  lj: 2,
                  bm: 0,
                  nm: "Stroke 1",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false,
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false,
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0], ix: 2 },
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 6 },
                  o: { a: 0, k: 100, ix: 7 },
                  sk: { a: 0, k: 0, ix: 4 },
                  sa: { a: 0, k: 0, ix: 5 },
                  nm: "Transform",
                },
              ],
              nm: "Group 1",
              np: 8,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false,
            },
            {
              ty: "tr",
              p: { a: 0, k: [37.5, 22.5], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Layer 1",
          np: 1,
          cix: 2,
          bm: 0,
          ix: 10,
          mn: "ADBE Vector Group",
          hd: false,
        },
      ],
      ip: 0,
      op: 29,
      st: 0,
      bm: 0,
    },
  ],
  markers: [],
};
function errorMsg(element) {
  element.css({ "border-color": "red", "background-color": "#ffd8d8" });
  return false;
}

function sendMail() {
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  jQuery(".first").length ? jQuery(".first").offset().top : "";
  sendData.name = jQuery(".name").val().length
    ? jQuery(".name").val()
    : errorMsg(jQuery(".name"));
  sendData.email = jQuery(".email").val().length
    ? jQuery(".email").val()
    : errorMsg(jQuery(".email"));
  sendData.subject = jQuery(".subject").val().length
    ? jQuery(".subject").val()
    : errorMsg(jQuery(".subject"));
  sendData.message = jQuery(".message").val();
  if (Object.values(sendData).every((value) => !value)) {
    return;
  } else {
    jQuery("input, textarea").css({
      "border-color": "#F4BC4F",
      "background-color": "#fff",
    });
  }
  if (!validateEmail(sendData.email)) {
    jQuery(".email").css({
      "border-color": "red",
      "background-color": "#ffd8d8",
    });
    return;
  } else {
    jQuery("input, textarea").css({
      "border-color": "#F4BC4F",
      "background-color": "#fff",
    });
  }
  jQuery.ajax({
    type: "POST",
    url: "action.php",
    data: sendData,
    success: function (response) {
      jQuery("#popup").css("display", "flex").hide().fadeIn();
      jQuery(".name").val("");
      jQuery(".email").val("");
      jQuery(".subject").val("");
      jQuery(".message").val("");
    },
  });
}
var menu = {};
menu.status = true;
function mainMenu_action() {
  if (menu.status) {
    menu.status = false;
    if (!jQuery("body").hasClass("menuActive")) {
      jQuery("body").addClass("menuActive");
      jQuery(".nav_btn--hamburg > div").addClass("active");
      setTimeout(() => {
        jQuery(".main_menuDiv").css("display", "flex").hide().fadeIn("fast");
        jQuery("body.menuActive .logoArea .menuLogo").addClass("active");
      }, 300);
    } else {
      jQuery(".main_menuDiv").fadeOut("fast");
      jQuery(".nav_btn--hamburg > div").removeClass("active");
      setTimeout(() => {
        jQuery("body").removeClass("menuActive");
        jQuery("body.menuActive .logoArea .menuLogo").removeClass("active");
      }, 100);
    }
  }
  setTimeout(() => {
    menu.status = true;
  }, 500);
}
function initCustomAnimation(yPos, wh) {
  for (var key in animObject) {
    var eltopPosition = jQuery("#" + key).offset().top;
    if (
      wh > eltopPosition ||
      (yPos + wh > eltopPosition && jQuery(window).width() < 960)
    ) {
      animObject[key].call();
      delete animObject[key];
    }
  }
}

// if (jQuery("main#about_page").length) {
//   if (
//     scrollPos >= posObj.firstSection &&
//     (scrollPos + wh) * 0.8 < posObj.secondSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FCFCFF");
//   } else if (
//     scrollPos + wh + 1 >= posObj.secondSection &&
//     scrollPos + wh + 1 < posObj.thirdSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FEDB86");
//   } else if (scrollPos + wh >= posObj.thirdSection) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#5C5DB1");
//   }
// }
// if (jQuery("main#careers_page").length) {
//   if (
//     scrollPos + wh >= posObj.firstSection &&
//     scrollPos + wh < posObj.secondSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FCFCFF");
//   } else if (
//     scrollPos + wh * 0.7 >= posObj.secondSection &&
//     scrollPos + wh * 0.7 < posObj.thirdSection
//   ) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#D16978");
//   } else if (scrollPos + wh >= posObj.thirdSection) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#5C5DB1");
//   }
// }
// if (jQuery("main#design_page").length) {
//   if (
//     scrollPos >= posObj.firstSection &&
//     (scrollPos + wh) * 0.8 < posObj.secondSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FCFCFF");
//   } else if (
//     scrollPos + wh + 1 >= posObj.secondSection &&
//     scrollPos + wh + 1 < posObj.thirdSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FEDB86");
//   } else if (scrollPos + wh >= posObj.thirdSection) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#5C5DB1");
//   }
// }
// if (jQuery("main#careers_page").length) {
//   if (
//     scrollPos >= posObj.firstSection &&
//     (scrollPos + wh) * 0.8 < posObj.secondSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FCFCFF");
//   } else if (
//     scrollPos + wh * 0.7 >= posObj.secondSection &&
//     scrollPos + wh * 0.7 < posObj.thirdSection
//   ) {
//     jQuery("body").addClass("wt");
//     jQuery("body").removeClass("yel");
//     jQuery(".wrap").css("background-color", "#FEDB86");
//   } else if (scrollPos + wh >= posObj.thirdSection) {
//     jQuery("body").addClass("wt yel");
//     jQuery(".wrap").css("background-color", "#5C5DB1");
//   }
//   let position = jQuery(".sp_block").offset().top;
//   if (position < wh) {
//     var time = 150;
//     jQuery(".sp_block .sp_item").each(function (i) {
//       setTimeout(() => {
//         jQuery(this).find("img").addClass("bounce-in");
//       }, time * i);
//     });
//   }
// }
// if (jQuery("main#nft_page").length) {
//   if (
//     scrollPos >= posObj.firstSection &&
//     scrollPos + wh * 0.9 < posObj.yellowSec
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FEDB86");
//   } else if (
//     scrollPos + wh >= posObj.yellowSec &&
//     scrollPos + wh * 0.7 < posObj.secondSection
//   ) {
//     jQuery("body").removeClass("wt");
//     jQuery(".wrap").css("background-color", "#FEDB86");
//   } else if (
//     scrollPos + wh * 0.7 >= posObj.secondSection &&
//     scrollPos + wh * 0.7 < posObj.thirdSection
//   ) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#D16978");
//   } else if (scrollPos + wh >= posObj.thirdSection) {
//     jQuery("body").addClass("wt");
//     jQuery(".wrap").css("background-color", "#5C5DB1");
//   }
// }
