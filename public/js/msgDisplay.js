function openMessage(title, content, sender, importancia, added, id) {
  const newWindow = window.open("", "_blank", "width=400,height=300")
  newWindow.document.write(`
      <html>
          <head>
              <title>${title}: ID: ${id}</title>
              <style>
                    /* Aquí puedes incluir el CSS mejorado directamente */
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        color: #333;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        color: #555;
                        line-height: 1.5;
                    }
                    strong {
                        color: #000;
                    }
                    .message-container {
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        padding: 15px;
                        background-color: #fff;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                </style>
          </head>
          <body>
              <h1>${title}</h1>
              <p><strong>Remitente:</strong> ${sender}</p>
              <p>${content}</p>
              <p><strong>Nivel de Importancia:</strong>${importancia}</p>
              <p><strong>Fecha de envio:</strong> ${new Date(added).toLocaleString()}</p>
          </body>
      </html>
  `)
  newWindow.document.close()
}
