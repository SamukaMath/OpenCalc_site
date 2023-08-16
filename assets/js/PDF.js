var url = '../../pdfs/ofertatarde.pdf';

    // Configurando o visualizador de PDF
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

    var pdfViewer = document.getElementById('viewerContainer');
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc) {
        for (var pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then(function(page) {
                var canvas = document.createElement('canvas');
                pdfViewer.appendChild(canvas);
                var viewport = page.getViewport({ scale: 1.3 });
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport });
            });
        }
    });