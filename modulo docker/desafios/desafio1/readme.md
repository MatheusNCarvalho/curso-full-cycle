Esse desafio � muito empolgante principalmente se voc� nunca trabalhou com a linguagem Go!
Voc� ter� que publicar uma imagem no docker hub. Quando executarmos:

docker run matheusncarvalho/codeeducation

Temos que ter o seguinte resultado: Code.education Rocks!

Se voc� perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no pr�prio site da Go Lang para aprender como fazer um "ol� mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No v�deo de introdu��o sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utiliz�-la.

Divirta-se



docker run --rm -it matheusncarvalho/codeeducation