var vetImmagini=["../immagini/body/f2.jpg","../immagini/body/f3.jpg","../immagini/body/f4.jpg","../immagini/body/f5.jpg","../immagini/body/f1.jpg",];
var indice=0;

//FUNZIONE ONLOAD
function load()
{
    alert("Benvenuto!\nLa pagina è stata caricata correttamente");
}

//FUNZIONE SCROLL IMMAGINI
function aggiungi()
{
    document.getElementById("img_scroll").src=vetImmagini[indice];
    indice++;
    if (indice>=vetImmagini.length)
    {
        indice=0;
    }
}

//PRENOTAZIONE
function prenota()
{
    var sDate = document.getElementById("date").value; //data
    var sOrario = document.getElementById("orario").value; //time
    var nCguida = 10.00;
    var nSguida = 5.00;
    var nIngressi = parseInt(document.getElementById("number").value) || 0; //numero partecipanti
    var sName = document.getElementById("name").value; //nome referente
    var sEmail = document.getElementById("email").value; //email referente
    var sCell = document.getElementById("cell").value; //cell referente
    var nPrezzo = 0;

    //calcolo prezzo
    if(document.getElementById("tipo").value=="senza")
    {
        nPrezzo=nIngressi*nSguida;
    }
    else
    {
        nPrezzo=nIngressi*nCguida;
    }

    /*STAMPA FINALE*/
    alert("NOME REFERENTE: " +sName+
            "\nEMAIL:\t\t\t" +sEmail+
            "\nCELLULARE:\t\t" +sCell+
            "\n\nDATA VISITA:\t\t" +sDate+
            "\nORARIO VISITA:\t" +sOrario+
            "\nPREZZO VISITA:\t"+nPrezzo);
}