SASS :pre processore per css

<--!introduzione-->

SASS estende le possibiltà di css facilitando e velocizzando lo sviluppo dei fogli di stile, di
 tipo sintattico, non rinuncia a css
 non aggiunge nulla

->preprocessore: tecnologia che permette di ottenere fogli di stile ottimizzati facilmente
gestibili e mantenibili
permette di estendere ai css le strutture di programmazione come variabili, funzioni cicli e cosi
via. -> strutture di programmazione che già conosciamo

->ogni modifica a sass modifica anche css

-linguaggio sintatti completo: in grado di poter scrivere e generare qualsiasi proprietà css
-compatibile con css: tutte le sue caratteristiche
-si possono generare file css da sorgente sass: in fase di sviluppo si può fare
-ogni modifica massiva a sas corrisponderà a css3

2 SINTASSI PRINCIPALI:
1. sintassi rientrata -> utulizza i rientri del codice per separare i diversi blocchi. ha estensione. sass -> indentatare in maniera coerente tutti i blocchi
2. sassy css -> utilizza una formattazione simile ai css, sintassi più largamente in uso -> la sue estensione è .scss

tutta la sintassi css conosciuta è del tutto compatibile con la sintassi sass, tutto il css è anche tutto sass, e viceversa.

<!--vantaggi dell' uso di sass ed esempi-->

oltre alla velocità di sviluppo è di vantaggio il perfetto controllo del foglio di stile, in particolare l'utilizzo di strutture di programmazione come il controllo condizionale, cicli e le variabili applicate a css

SINTASSI SCSS:
$colore-primario : #fdfdfd;

h1 {
    color: $colore-primario;
}

SINTASSI SASS:
h1
 color: $colore-primario

 --> CI AIUTE AD EVITARE LE TANTE RIPETIZIONI DI CODICE A CUI CSS E SOGGETTO

 <--!strumenti framework per sass>
 i file sass no sono direttamente letti dal browser ma devono essere interpretati per poi generare il css, i sass vanno compilati per poi generare il css

 