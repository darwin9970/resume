<template>
  <div
    id="pdf-button"
    class="pdf-button"
    @click="handleGetPDF"
  >
    <span class="large">
      下载PDF简历
    </span>
    <span class="small">
      <i class="iconfont icon-download" />
    </span>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { nextTick } from 'vue';
export default {
  name: 'PDFButton',
  methods: {
    handleGetPDF() {
      const exportPDF = async () => {
        await nextTick();
        window.scrollTo(0, 0);
        // 隐藏浮动按钮，避免出现在导出中
        const pdfBtnEl = document.getElementById('pdf-button');
        const fixBtnWrap = document.getElementById('fix-button-wrapper');
        const oldPdfBtnVis = pdfBtnEl ? pdfBtnEl.style.visibility : '';
        const oldFixBtnVis = fixBtnWrap ? fixBtnWrap.style.visibility : '';
        if (pdfBtnEl) pdfBtnEl.style.visibility = 'hidden';
        if (fixBtnWrap) fixBtnWrap.style.visibility = 'hidden';

        const el = document.getElementById('base');
        if (!el) return;
        const canvas = await html2canvas(el, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          windowWidth: el.scrollWidth,
          windowHeight: el.scrollHeight,
        });
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = 210;
        const pdfHeight = 297;
        const contentRatio = canvas.height / canvas.width;
        const pageRatio = pdfHeight / pdfWidth; // ≈1.414
        // 让内容尽量贴近整页高度，减少底部留白
        const fitByHeight = contentRatio < pageRatio;
        const imgHeight = fitByHeight ? pdfHeight : (pdfWidth * contentRatio);
        const imgWidth = fitByHeight ? (pdfHeight / contentRatio) : pdfWidth;
        const xOffset = Math.max(0, (pdfWidth - imgWidth) / 2);

        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(imgData, 'JPEG', xOffset, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
        while (heightLeft > 0) {
          position -= pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', xOffset, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }

        const filename = '简历_向习文_前端开发工程师.pdf';
        pdf.save(filename);

        // 还原按钮可见性
        if (pdfBtnEl) pdfBtnEl.style.visibility = oldPdfBtnVis;
        if (fixBtnWrap) fixBtnWrap.style.visibility = oldFixBtnVis;
      };

      exportPDF();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '@/styles/common.scss' as *;
.pdf-button {
  position: fixed;
  line-height: 3;
  right: 40px;
  bottom: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background: $deep-blue;
  border: none;
  border-radius: 20px;
  outline: none;
  .large {
    padding: 0 20px;
    display: block;
  }
  .small {
    display: none;
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  @media screen and (max-width: 1049px) {
    bottom: 100px;
    .large {
      display: none;
    }
    .small {
      display: block;
    }
    #pdf-button {
      display: none;
    }
  }
}
</style>


