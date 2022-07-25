 $(document).ready(() => {
    $("option#option_quarto").hide()
    $("select#hotel").change(() => {
        const id_hotel = $("select#hotel").val()
        
        $("option#option_quarto").hide()
        $(`option#option_quarto[data-hotel="${id_hotel}"]`).show()        
    })
})