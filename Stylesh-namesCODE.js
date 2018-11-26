 /*<![CDATA[*/
 //en&ar
 function araf(x) {
 var1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 p='';
 q='';
 a=document.getElementById('a').value;
 n=0;
 while(n<a.length) {
 o=0; s=0;
 while (s!=1) {
 if(a.charAt(n)!=var1.charAt(o)) {
 o++;
 if(o==x.length) {
 q=a.charAt(n); s=1;
  }
 } else { 
 q=x.charAt(o);
 s=1;
    } ;
  } 
 p=p+q;
 n++;
  } return p;
 }
 
 

 
 function texteraaction() {
 //fb accepte
 document.getElementById('b1') .value=araf('ახcშeქნჩរჟkსღთტթ၎ଧနtՄଥటჯუշახcშeქნჩរჟkსღთტթ၎ଧနtՄଥటჯუշ');
 document.getElementById('b2') .value=araf('ՁՅՇԺeԲՃԻរՆkԸՊռՓթզՐՖԵևՄպxუշՁՅՇԺeԲՃԻរՆkԸՊռՓթզՐՖԵևՄպxუշ');
 document.getElementById('b3') .value=araf('മഭCഉఔfരഷរjkഴതശഠန၎ဍនԵലറയჯyജമഭCഉఔfരഷរjkഴതശഠန၎ဍនtലറയჯyജ');
 document.getElementById('b4') .value=araf('ଏଓଟଅჰჭଡଐរJkLଳଇఈଫଣଧsԵଥVటჯଖzଏଓଟଅჰჭଡଐរJkLଳଇఈଫଣଧstଥVటჯଖz');
//For P.N
 document.getElementById('b5') .value=araf('ʌɓcɗɘʆʛʜɩjĸɭɱŋopqʀstʋvwxƴʑʌɓcɗɘʆʛʜɩjĸɭɱŋopqʀstʋvwxƴʑ');
 document.getElementById('b6') .value=araf('αвc∂εғgнιנкℓмησρqяsтυvωxүzαвc∂εғgнιנкℓмησρqяsтυvωxүz');
 document.getElementById('b7') .value=araf('ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ');
 document.getElementById('b8') .value=araf('ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ');
 document.getElementById('b9') .value=araf('₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ');
 document.getElementById('b10') .value=araf('ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ');
 document.getElementById('b11') .value=araf('卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙');
 document.getElementById('b12') .value=araf('ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאzค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz');
 document.getElementById('b13') .value=araf('ᗅᙘᑤᗫᙍᖴᘜᕼᓿᒙᖽᒪᙢᘉᓎᕿᕴᖇSᖶᑗᐻᙎ᙭ᖻᙣᗅᙘᑤᗫᙍᖴᘜᕼᓿᒙᖽᒪᙢᘉᓎᕿᕴᖇSᖶᑗᐻᙎ᙭ᖻᙣ');
 document.getElementById('b14') .value=araf('ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꎭꈤꂦᖘꆰꋪꌗ꓄ꀎᐯꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꎭꈤꂦᖘꆰꋪꌗ꓄ꀎᐯꅏꊼꌩꁴ');
 document.getElementById('b15') .value=araf('ᕱც꒝Ðꂅꊰg♅ᎥϳКլოภԾᎵգᏒᏕϮuᏉᎳꊼᎩẔᕱც꒝Ðꂅꊰg♅ᎥϳКլოภԾᎵգᏒᏕϮuᏉᎳꊼᎩẔ');
 document.getElementById('b16') .value=araf('ḀḃḉḊḕḟḠḧḭjḲḶṁṆṏṖqṙṠṮṳṼẇẌẏẒḀḂḈḊḔḞḠḦḬJḲḶṀṆṎṖQṘṠṮṲṼẆẌẎẒ');
 document.getElementById('b17') .value=araf('₳฿₢₯£₣௹╫៛৲₭』₥₦⊜₱〄┟₴৳ʊ⍢₩✘ˠζ₳฿₢₯£₣௹╫៛৲₭』₥₦⊜₱〄┟₴৳ʊ⍢₩✘ˠζ');
 document.getElementById('b18') .value=araf('∀β∁⍧∄∲௹♅〴♩☇≀₪☊✆℗☌☈§∤☋︾♨✗⍒⇌∀β∁⍧∄∲௹♅〴♩☇≀₪☊✆℗☌☈§∤☋︾♨✗⍒⇌');
 document.getElementById('b19') .value=araf('⍲␢⍧﹞⍷⍀௹⋕⍸⌡₭∟≞⊓⌾⌮⌕☈⑀╤⌴⍔⍦╳⊬');
 document.getElementById('b20') .value=araf('abcdefghijklmnopqrstuvwxyz');


 }/*]]>*/
