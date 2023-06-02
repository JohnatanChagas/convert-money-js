const convert_button = document.querySelector(".convert-button")
const currency_select = document.querySelector(".currency-select")

function convert_values (){
    const input_currency_value = document.querySelector(".input-currency").value
    const currency_value_to_convert = document.querySelector(".currency-velue-to-convert") // Valor em real
    const currency_value_converted = document.querySelector(".currency-velue") // outras moedas

    const dolar_today = 5.2
    const euro_today = 6.2
    const libra_today = 8.9
    const bitcoin_today = 133.7

    if(currency_select.value ===  "dolar"){
        // Se o select estiver selecionado o valor de "dolar", entre aqui
        currency_value_converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input_currency_value / dolar_today)
    }
    else if(currency_select.value ===  "euro"){
        // Se o select estiver selecionado o valor de "euro", entre aqui
        currency_value_converted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(input_currency_value / euro_today)
    }
    else if(currency_select.value === "libra"){
        // Se o select estiver selecionado o valor de "libra", entre aqui
        currency_value_converted.innerHTML = new Intl.NumberFormat("en-GB" , {
            style: "currency",
            currency: "GBP"
        }).format(input_currency_value / libra_today)
    }
    else if(currency_select.value === "bitcoin"){
        // Se o select estiver selecionado o valor de "bitcoin", entre aqui
        currency_value_converted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(input_currency_value / bitcoin_today)
    }

    currency_value_to_convert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(input_currency_value)
}

function change_currency(){
    const currency_name = document.getElementById("currency-name")
    const currency_img = document.querySelector(".currency-img")

    if(currency_select.value ===  "dolar") {
        currency_name.innerHTML = "Dólar americano"
        currency_img.src = "./Assets/dolar.png"
    }

    else if(currency_select.value ===  "euro") {
        currency_name.innerHTML = "Euro"
        currency_img.src = "./Assets/euro.png"
    }

    else  if(currency_select.value === "libra"){
        currency_name.innerHTML = "Libra"
        currency_img.src = "./Assets/libra.png"
    }

    else  if(currency_select.value === "bitcoin"){
        currency_name.innerHTML = "Bitcoin"
        currency_img.src = "./Assets/bitcoin.png"
    }

    convert_values()
}


currency_select.addEventListener("change", change_currency)
convert_button.addEventListener("click", convert_values)