$(document).ready(function () {
    $("#example").DataTable({
        ajax: "https://script.google.com/macros/s/AKfycbwnr0k8hWYTmofb0SCK3ksEMoLBQNyn7UlQPpy3bfTqN7KR-zz8cHQr1k2ZLPyHNI8sZQ/exec",
        columns: [
            { title: "NOMOR", data: "NOMOR" },
            { title: "ALAMAT PENGIRIM", data: "ALAMAT PENGIRIM" },
            { title: "NOMOR SURAT", data: "NOMOR SURAT" },
            { title: "TANGGAL", data: "TANGGAL" },
            { title: "PERIHAL", data: "PERIHAL" },
            { title: "KETERANGAN", data: "KETERANGAN" },
            {
                title: "AKSI",
                data: null,
                render: function (data, type, row) {
                    return (
                        '<button class="btn btn-primary btn-sm" ' +
                        'onclick="lihatDetail(\'' + row["KETERANGAN"] + '\', \'' + row["LastUpdate"] + '\', \'' + row["TANGGAL"] + '\')">Lihat</button>'
                    );
                },
                orderable: false,
                searchable: false
            }
        ],
        rowId: "ID",
    });
  });
  
  function lihatDetail(keterangan, lastUpdate, tanggal) {
    sessionStorage.setItem("keterangan", keterangan);
    sessionStorage.setItem("LastUpdate", lastUpdate);
    sessionStorage.setItem("tanggal", tanggal);
  
    document.getElementById("modalIframe").src = "FlowSurat.html";
    $("#suratModal").modal("show");
  }
  
