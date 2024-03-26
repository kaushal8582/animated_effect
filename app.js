function sequence_animation() {
    const canvas = document.querySelector('#home>canvas');
    const context = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });
  
    function files(index) {
      var data = `nike/Nike Shoes 3d Animation(1080P_HD)_000.png
      nike/Nike Shoes 3d Animation(1080P_HD)_001.png
      nike/Nike Shoes 3d Animation(1080P_HD)_002.png
      nike/Nike Shoes 3d Animation(1080P_HD)_003.png
      nike/Nike Shoes 3d Animation(1080P_HD)_004.png
      nike/Nike Shoes 3d Animation(1080P_HD)_005.png
      nike/Nike Shoes 3d Animation(1080P_HD)_006.png
      nike/Nike Shoes 3d Animation(1080P_HD)_007.png
      nike/Nike Shoes 3d Animation(1080P_HD)_008.png
      nike/Nike Shoes 3d Animation(1080P_HD)_009.png
      nike/Nike Shoes 3d Animation(1080P_HD)_010.png
      nike/Nike Shoes 3d Animation(1080P_HD)_011.png
      nike/Nike Shoes 3d Animation(1080P_HD)_012.png
      nike/Nike Shoes 3d Animation(1080P_HD)_013.png
      nike/Nike Shoes 3d Animation(1080P_HD)_014.png
      nike/Nike Shoes 3d Animation(1080P_HD)_015.png
      nike/Nike Shoes 3d Animation(1080P_HD)_016.png
      nike/Nike Shoes 3d Animation(1080P_HD)_017.png
      nike/Nike Shoes 3d Animation(1080P_HD)_018.png
      nike/Nike Shoes 3d Animation(1080P_HD)_019.png
      nike/Nike Shoes 3d Animation(1080P_HD)_020.png
      nike/Nike Shoes 3d Animation(1080P_HD)_021.png
      nike/Nike Shoes 3d Animation(1080P_HD)_022.png
      nike/Nike Shoes 3d Animation(1080P_HD)_023.png
      nike/Nike Shoes 3d Animation(1080P_HD)_024.png
      nike/Nike Shoes 3d Animation(1080P_HD)_025.png
      nike/Nike Shoes 3d Animation(1080P_HD)_026.png
      nike/Nike Shoes 3d Animation(1080P_HD)_027.png
      nike/Nike Shoes 3d Animation(1080P_HD)_028.png
      nike/Nike Shoes 3d Animation(1080P_HD)_029.png
      nike/Nike Shoes 3d Animation(1080P_HD)_030.png
      nike/Nike Shoes 3d Animation(1080P_HD)_031.png
      nike/Nike Shoes 3d Animation(1080P_HD)_032.png
      nike/Nike Shoes 3d Animation(1080P_HD)_033.png
      nike/Nike Shoes 3d Animation(1080P_HD)_034.png
      nike/Nike Shoes 3d Animation(1080P_HD)_035.png
      nike/Nike Shoes 3d Animation(1080P_HD)_036.png
      nike/Nike Shoes 3d Animation(1080P_HD)_037.png
      nike/Nike Shoes 3d Animation(1080P_HD)_038.png
      nike/Nike Shoes 3d Animation(1080P_HD)_039.png
      nike/Nike Shoes 3d Animation(1080P_HD)_040.png
      nike/Nike Shoes 3d Animation(1080P_HD)_041.png
      nike/Nike Shoes 3d Animation(1080P_HD)_042.png
      nike/Nike Shoes 3d Animation(1080P_HD)_043.png
      nike/Nike Shoes 3d Animation(1080P_HD)_044.png
      nike/Nike Shoes 3d Animation(1080P_HD)_045.png
      nike/Nike Shoes 3d Animation(1080P_HD)_046.png
      nike/Nike Shoes 3d Animation(1080P_HD)_047.png
      nike/Nike Shoes 3d Animation(1080P_HD)_048.png
      nike/Nike Shoes 3d Animation(1080P_HD)_049.png
      nike/Nike Shoes 3d Animation(1080P_HD)_050.png
      nike/Nike Shoes 3d Animation(1080P_HD)_051.png
      nike/Nike Shoes 3d Animation(1080P_HD)_052.png
      nike/Nike Shoes 3d Animation(1080P_HD)_053.png
      nike/Nike Shoes 3d Animation(1080P_HD)_054.png
      nike/Nike Shoes 3d Animation(1080P_HD)_055.png
      nike/Nike Shoes 3d Animation(1080P_HD)_056.png
      nike/Nike Shoes 3d Animation(1080P_HD)_057.png
      nike/Nike Shoes 3d Animation(1080P_HD)_058.png
      nike/Nike Shoes 3d Animation(1080P_HD)_059.png
      nike/Nike Shoes 3d Animation(1080P_HD)_060.png
      nike/Nike Shoes 3d Animation(1080P_HD)_061.png
      nike/Nike Shoes 3d Animation(1080P_HD)_062.png
      nike/Nike Shoes 3d Animation(1080P_HD)_063.png
      nike/Nike Shoes 3d Animation(1080P_HD)_064.png
      nike/Nike Shoes 3d Animation(1080P_HD)_065.png
      nike/Nike Shoes 3d Animation(1080P_HD)_066.png
      nike/Nike Shoes 3d Animation(1080P_HD)_067.png
      nike/Nike Shoes 3d Animation(1080P_HD)_068.png
      nike/Nike Shoes 3d Animation(1080P_HD)_069.png
      nike/Nike Shoes 3d Animation(1080P_HD)_070.png
      nike/Nike Shoes 3d Animation(1080P_HD)_071.png
      nike/Nike Shoes 3d Animation(1080P_HD)_072.png
      nike/Nike Shoes 3d Animation(1080P_HD)_073.png
      nike/Nike Shoes 3d Animation(1080P_HD)_074.png
      nike/Nike Shoes 3d Animation(1080P_HD)_075.png
      nike/Nike Shoes 3d Animation(1080P_HD)_076.png
      nike/Nike Shoes 3d Animation(1080P_HD)_077.png
      nike/Nike Shoes 3d Animation(1080P_HD)_078.png
      nike/Nike Shoes 3d Animation(1080P_HD)_079.png
      nike/Nike Shoes 3d Animation(1080P_HD)_080.png
      nike/Nike Shoes 3d Animation(1080P_HD)_081.png
      nike/Nike Shoes 3d Animation(1080P_HD)_082.png
      nike/Nike Shoes 3d Animation(1080P_HD)_083.png
      nike/Nike Shoes 3d Animation(1080P_HD)_084.png
      nike/Nike Shoes 3d Animation(1080P_HD)_085.png
      nike/Nike Shoes 3d Animation(1080P_HD)_086.png
      nike/Nike Shoes 3d Animation(1080P_HD)_087.png
      nike/Nike Shoes 3d Animation(1080P_HD)_088.png
      nike/Nike Shoes 3d Animation(1080P_HD)_089.png
      nike/Nike Shoes 3d Animation(1080P_HD)_090.png
      nike/Nike Shoes 3d Animation(1080P_HD)_091.png
      nike/Nike Shoes 3d Animation(1080P_HD)_092.png
      nike/Nike Shoes 3d Animation(1080P_HD)_093.png
      nike/Nike Shoes 3d Animation(1080P_HD)_094.png
      nike/Nike Shoes 3d Animation(1080P_HD)_095.png
      nike/Nike Shoes 3d Animation(1080P_HD)_096.png
      nike/Nike Shoes 3d Animation(1080P_HD)_097.png
      nike/Nike Shoes 3d Animation(1080P_HD)_098.png
      nike/Nike Shoes 3d Animation(1080P_HD)_099.png
      nike/Nike Shoes 3d Animation(1080P_HD)_100.png
      nike/Nike Shoes 3d Animation(1080P_HD)_101.png
      nike/Nike Shoes 3d Animation(1080P_HD)_102.png
      nike/Nike Shoes 3d Animation(1080P_HD)_103.png
      nike/Nike Shoes 3d Animation(1080P_HD)_104.png
      nike/Nike Shoes 3d Animation(1080P_HD)_105.png
      nike/Nike Shoes 3d Animation(1080P_HD)_106.png
      nike/Nike Shoes 3d Animation(1080P_HD)_107.png
      nike/Nike Shoes 3d Animation(1080P_HD)_108.png
      nike/Nike Shoes 3d Animation(1080P_HD)_109.png
      nike/Nike Shoes 3d Animation(1080P_HD)_110.png
      nike/Nike Shoes 3d Animation(1080P_HD)_111.png
      nike/Nike Shoes 3d Animation(1080P_HD)_112.png
      nike/Nike Shoes 3d Animation(1080P_HD)_113.png
      nike/Nike Shoes 3d Animation(1080P_HD)_114.png
      nike/Nike Shoes 3d Animation(1080P_HD)_115.png
      nike/Nike Shoes 3d Animation(1080P_HD)_116.png
      nike/Nike Shoes 3d Animation(1080P_HD)_117.png
      nike/Nike Shoes 3d Animation(1080P_HD)_118.png
      nike/Nike Shoes 3d Animation(1080P_HD)_119.png
      nike/Nike Shoes 3d Animation(1080P_HD)_120.png
      nike/Nike Shoes 3d Animation(1080P_HD)_121.png
      nike/Nike Shoes 3d Animation(1080P_HD)_122.png
      nike/Nike Shoes 3d Animation(1080P_HD)_123.png
      nike/Nike Shoes 3d Animation(1080P_HD)_124.png
      nike/Nike Shoes 3d Animation(1080P_HD)_125.png
      nike/Nike Shoes 3d Animation(1080P_HD)_126.png
      nike/Nike Shoes 3d Animation(1080P_HD)_127.png
      nike/Nike Shoes 3d Animation(1080P_HD)_128.png
      nike/Nike Shoes 3d Animation(1080P_HD)_129.png
      nike/Nike Shoes 3d Animation(1080P_HD)_130.png
      nike/Nike Shoes 3d Animation(1080P_HD)_131.png
      nike/Nike Shoes 3d Animation(1080P_HD)_132.png
      nike/Nike Shoes 3d Animation(1080P_HD)_133.png
      nike/Nike Shoes 3d Animation(1080P_HD)_134.png
      nike/Nike Shoes 3d Animation(1080P_HD)_135.png
      nike/Nike Shoes 3d Animation(1080P_HD)_136.png
      nike/Nike Shoes 3d Animation(1080P_HD)_137.png
      nike/Nike Shoes 3d Animation(1080P_HD)_138.png
      nike/Nike Shoes 3d Animation(1080P_HD)_139.png
      nike/Nike Shoes 3d Animation(1080P_HD)_140.png
      nike/Nike Shoes 3d Animation(1080P_HD)_141.png
      nike/Nike Shoes 3d Animation(1080P_HD)_142.png
      nike/Nike Shoes 3d Animation(1080P_HD)_143.png
      nike/Nike Shoes 3d Animation(1080P_HD)_144.png
      nike/Nike Shoes 3d Animation(1080P_HD)_145.png
      nike/Nike Shoes 3d Animation(1080P_HD)_146.png
      nike/Nike Shoes 3d Animation(1080P_HD)_147.png
      nike/Nike Shoes 3d Animation(1080P_HD)_148.png
      nike/Nike Shoes 3d Animation(1080P_HD)_149.png
      nike/Nike Shoes 3d Animation(1080P_HD)_150.png
      nike/Nike Shoes 3d Animation(1080P_HD)_151.png
      nike/Nike Shoes 3d Animation(1080P_HD)_152.png
      nike/Nike Shoes 3d Animation(1080P_HD)_153.png
      nike/Nike Shoes 3d Animation(1080P_HD)_154.png
      nike/Nike Shoes 3d Animation(1080P_HD)_155.png
      nike/Nike Shoes 3d Animation(1080P_HD)_156.png
      nike/Nike Shoes 3d Animation(1080P_HD)_157.png
      nike/Nike Shoes 3d Animation(1080P_HD)_158.png
      nike/Nike Shoes 3d Animation(1080P_HD)_159.png
      nike/Nike Shoes 3d Animation(1080P_HD)_160.png
      nike/Nike Shoes 3d Animation(1080P_HD)_161.png
      nike/Nike Shoes 3d Animation(1080P_HD)_162.png
      nike/Nike Shoes 3d Animation(1080P_HD)_163.png
      nike/Nike Shoes 3d Animation(1080P_HD)_164.png
      nike/Nike Shoes 3d Animation(1080P_HD)_165.png
      nike/Nike Shoes 3d Animation(1080P_HD)_166.png
      nike/Nike Shoes 3d Animation(1080P_HD)_167.png
      nike/Nike Shoes 3d Animation(1080P_HD)_168.png
      nike/Nike Shoes 3d Animation(1080P_HD)_169.png
      nike/Nike Shoes 3d Animation(1080P_HD)_170.png
      nike/Nike Shoes 3d Animation(1080P_HD)_171.png
      nike/Nike Shoes 3d Animation(1080P_HD)_172.png
      nike/Nike Shoes 3d Animation(1080P_HD)_173.png
      nike/Nike Shoes 3d Animation(1080P_HD)_174.png
      nike/Nike Shoes 3d Animation(1080P_HD)_175.png
      nike/Nike Shoes 3d Animation(1080P_HD)_176.png
      nike/Nike Shoes 3d Animation(1080P_HD)_177.png
      nike/Nike Shoes 3d Animation(1080P_HD)_178.png
      nike/Nike Shoes 3d Animation(1080P_HD)_179.png
      nike/Nike Shoes 3d Animation(1080P_HD)_180.png
      nike/Nike Shoes 3d Animation(1080P_HD)_181.png
      nike/Nike Shoes 3d Animation(1080P_HD)_182.png
      nike/Nike Shoes 3d Animation(1080P_HD)_183.png
      nike/Nike Shoes 3d Animation(1080P_HD)_184.png
      nike/Nike Shoes 3d Animation(1080P_HD)_185.png
      nike/Nike Shoes 3d Animation(1080P_HD)_186.png
      nike/Nike Shoes 3d Animation(1080P_HD)_187.png
      nike/Nike Shoes 3d Animation(1080P_HD)_188.png
      nike/Nike Shoes 3d Animation(1080P_HD)_189.png
      nike/Nike Shoes 3d Animation(1080P_HD)_190.png
      nike/Nike Shoes 3d Animation(1080P_HD)_191.png
      nike/Nike Shoes 3d Animation(1080P_HD)_192.png
      nike/Nike Shoes 3d Animation(1080P_HD)_193.png
      nike/Nike Shoes 3d Animation(1080P_HD)_194.png
      nike/Nike Shoes 3d Animation(1080P_HD)_195.png
      nike/Nike Shoes 3d Animation(1080P_HD)_196.png
      nike/Nike Shoes 3d Animation(1080P_HD)_197.png
      nike/Nike Shoes 3d Animation(1080P_HD)_198.png
      nike/Nike Shoes 3d Animation(1080P_HD)_199.png
      nike/Nike Shoes 3d Animation(1080P_HD)_200.png
      nike/Nike Shoes 3d Animation(1080P_HD)_201.png
      nike/Nike Shoes 3d Animation(1080P_HD)_202.png
      nike/Nike Shoes 3d Animation(1080P_HD)_203.png
      nike/Nike Shoes 3d Animation(1080P_HD)_204.png
      nike/Nike Shoes 3d Animation(1080P_HD)_205.png
      nike/Nike Shoes 3d Animation(1080P_HD)_206.png
      nike/Nike Shoes 3d Animation(1080P_HD)_207.png
      nike/Nike Shoes 3d Animation(1080P_HD)_208.png
      nike/Nike Shoes 3d Animation(1080P_HD)_209.png
      nike/Nike Shoes 3d Animation(1080P_HD)_210.png
      nike/Nike Shoes 3d Animation(1080P_HD)_211.png
      nike/Nike Shoes 3d Animation(1080P_HD)_212.png
      nike/Nike Shoes 3d Animation(1080P_HD)_213.png
      nike/Nike Shoes 3d Animation(1080P_HD)_214.png
      nike/Nike Shoes 3d Animation(1080P_HD)_215.png
      nike/Nike Shoes 3d Animation(1080P_HD)_216.png
      nike/Nike Shoes 3d Animation(1080P_HD)_217.png
      nike/Nike Shoes 3d Animation(1080P_HD)_218.png
      nike/Nike Shoes 3d Animation(1080P_HD)_219.png
      nike/Nike Shoes 3d Animation(1080P_HD)_220.png
      nike/Nike Shoes 3d Animation(1080P_HD)_221.png
      nike/Nike Shoes 3d Animation(1080P_HD)_222.png
      nike/Nike Shoes 3d Animation(1080P_HD)_223.png
      nike/Nike Shoes 3d Animation(1080P_HD)_224.png
      nike/Nike Shoes 3d Animation(1080P_HD)_225.png
      nike/Nike Shoes 3d Animation(1080P_HD)_226.png
      nike/Nike Shoes 3d Animation(1080P_HD)_227.png
      nike/Nike Shoes 3d Animation(1080P_HD)_228.png
      nike/Nike Shoes 3d Animation(1080P_HD)_229.png
      nike/Nike Shoes 3d Animation(1080P_HD)_230.png
      nike/Nike Shoes 3d Animation(1080P_HD)_231.png
      nike/Nike Shoes 3d Animation(1080P_HD)_232.png
      nike/Nike Shoes 3d Animation(1080P_HD)_233.png
      nike/Nike Shoes 3d Animation(1080P_HD)_234.png
      nike/Nike Shoes 3d Animation(1080P_HD)_235.png
      nike/Nike Shoes 3d Animation(1080P_HD)_236.png
      nike/Nike Shoes 3d Animation(1080P_HD)_237.png
      nike/Nike Shoes 3d Animation(1080P_HD)_238.png
      nike/Nike Shoes 3d Animation(1080P_HD)_239.png
      nike/Nike Shoes 3d Animation(1080P_HD)_240.png
      nike/Nike Shoes 3d Animation(1080P_HD)_241.png
      nike/Nike Shoes 3d Animation(1080P_HD)_242.png
      nike/Nike Shoes 3d Animation(1080P_HD)_243.png
      nike/Nike Shoes 3d Animation(1080P_HD)_244.png
      nike/Nike Shoes 3d Animation(1080P_HD)_245.png
      nike/Nike Shoes 3d Animation(1080P_HD)_246.png
      nike/Nike Shoes 3d Animation(1080P_HD)_247.png
      nike/Nike Shoes 3d Animation(1080P_HD)_248.png
      nike/Nike Shoes 3d Animation(1080P_HD)_249.png
      nike/Nike Shoes 3d Animation(1080P_HD)_250.png
      nike/Nike Shoes 3d Animation(1080P_HD)_251.png
      nike/Nike Shoes 3d Animation(1080P_HD)_252.png
      nike/Nike Shoes 3d Animation(1080P_HD)_253.png
      nike/Nike Shoes 3d Animation(1080P_HD)_254.png
      nike/Nike Shoes 3d Animation(1080P_HD)_255.png
      nike/Nike Shoes 3d Animation(1080P_HD)_256.png
      nike/Nike Shoes 3d Animation(1080P_HD)_257.png
      nike/Nike Shoes 3d Animation(1080P_HD)_258.png
      nike/Nike Shoes 3d Animation(1080P_HD)_259.png
      nike/Nike Shoes 3d Animation(1080P_HD)_260.png
      nike/Nike Shoes 3d Animation(1080P_HD)_261.png
      nike/Nike Shoes 3d Animation(1080P_HD)_262.png
      nike/Nike Shoes 3d Animation(1080P_HD)_263.png
      nike/Nike Shoes 3d Animation(1080P_HD)_264.png
      nike/Nike Shoes 3d Animation(1080P_HD)_265.png
      nike/Nike Shoes 3d Animation(1080P_HD)_266.png
      nike/Nike Shoes 3d Animation(1080P_HD)_267.png
      nike/Nike Shoes 3d Animation(1080P_HD)_268.png
      nike/Nike Shoes 3d Animation(1080P_HD)_269.png
      nike/Nike Shoes 3d Animation(1080P_HD)_270.png
      nike/Nike Shoes 3d Animation(1080P_HD)_271.png
      nike/Nike Shoes 3d Animation(1080P_HD)_272.png
      nike/Nike Shoes 3d Animation(1080P_HD)_273.png
      nike/Nike Shoes 3d Animation(1080P_HD)_274.png
      nike/Nike Shoes 3d Animation(1080P_HD)_275.png
      nike/Nike Shoes 3d Animation(1080P_HD)_276.png
      nike/Nike Shoes 3d Animation(1080P_HD)_277.png
      nike/Nike Shoes 3d Animation(1080P_HD)_278.png
      nike/Nike Shoes 3d Animation(1080P_HD)_279.png
      nike/Nike Shoes 3d Animation(1080P_HD)_280.png
      nike/Nike Shoes 3d Animation(1080P_HD)_281.png
      nike/Nike Shoes 3d Animation(1080P_HD)_282.png
      nike/Nike Shoes 3d Animation(1080P_HD)_283.png
      nike/Nike Shoes 3d Animation(1080P_HD)_284.png
      nike/Nike Shoes 3d Animation(1080P_HD)_285.png
      nike/Nike Shoes 3d Animation(1080P_HD)_286.png
      nike/Nike Shoes 3d Animation(1080P_HD)_287.png
      nike/Nike Shoes 3d Animation(1080P_HD)_288.png
      nike/Nike Shoes 3d Animation(1080P_HD)_289.png
      nike/Nike Shoes 3d Animation(1080P_HD)_290.png
      nike/Nike Shoes 3d Animation(1080P_HD)_291.png
      nike/Nike Shoes 3d Animation(1080P_HD)_292.png
      nike/Nike Shoes 3d Animation(1080P_HD)_293.png
      nike/Nike Shoes 3d Animation(1080P_HD)_294.png
      nike/Nike Shoes 3d Animation(1080P_HD)_295.png
      nike/Nike Shoes 3d Animation(1080P_HD)_296.png
      nike/Nike Shoes 3d Animation(1080P_HD)_297.png
      nike/Nike Shoes 3d Animation(1080P_HD)_298.png
      nike/Nike Shoes 3d Animation(1080P_HD)_299.png
      nike/Nike Shoes 3d Animation(1080P_HD)_300.png
      `;
      return data.split('\n')[index];
    }
  
    const frameCount = 300;
  
    const images = [];
    const imageSeq = {
      frame: 0,
    };
  
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
  
    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: true,
        pin: true,
        trigger: '#home',
      },
      onUpdate: render,
    });
  
    images[0].onload = render;
  
    function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    gsap.to("#home canvas",{
      scrollTrigger:{
        trigger:"#home",
        start:"bottom 80%",
        scrub:true,
        // markers:true
      },
      scale:0.6,
    })

}


function locoMotiveScroll(){
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}

locoMotiveScroll();  
sequence_animation();