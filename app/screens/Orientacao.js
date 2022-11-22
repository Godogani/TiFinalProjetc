import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking, 
  ScrollView
} from "react-native";
import { Modalize } from "react-native-modalize";

const Orientacao = () => {
  const modalizeRef1 = useRef(null);
  const modalizeRef2 = useRef(null);

  function atendimentoMulher() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:180`;
    } else {
      phoneNumber = `telprompt:180`;
    }
    Linking.openURL(phoneNumber);
  }
  function policiaMilitar() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:190`;
    } else {
      phoneNumber = `telprompt:190`;
    }
    Linking.openURL(phoneNumber);
  }
  function disqueDenuncia() {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:181`;
    } else {
      phoneNumber = `telprompt:181`;
    }
    Linking.openURL(phoneNumber);
  }

  function onOpen1() {
    modalizeRef1.current?.open();
  }
  function onOpen2() {
    modalizeRef2.current?.open();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>O QUE É VIOLÊNCIA DOMÉSTICA?</Text>
        <Text style={styles.paragrafo}>
          {"   "}
          De acordo com o art. 5º da Lei Maria da Penha, violência doméstica e
          familiar contra a mulher é “qualquer ação ou omissão baseada no gênero
          que lhe cause morte, lesão, sofrimento físico, sexual ou psicológico e
          dano moral ou patrimonial”.
        </Text>
      </View>
      <View style={styles.conteudo}>
        <View>
          <Text style={styles.titulo}>
            POR QUE A LEI MARIA DA PENHA É TÃO IMPORTANTE?
          </Text>
          <Text style={styles.paragrafo}>
            {"   "}
            Com a lei, a autoridade judicial ou policial pode conceder medidas
            protetivas de urgência, que são ações para proteger a mulher, como o
            afastamento do agressor/a do lar, proibição de contato com a vítima
            e testemunhas, suspensão do porte de armas, encaminhamento da mulher
            a programas de proteção, entre outras.{"\n"}
            {"   "}A lei protege a vítima mulher e o agressor pode ser homem ou
            mulher, que tenha relação de afeto ou convivência: podem ser
            maridos/esposas, companheiros/as, namorados/as (que morem juntos ou
            não) e outros/as familiares (pai, mãe, irmão, irmã, filhos/as,
            genro, nora, etc).
          </Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={onOpen1}>
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "#6f5e76" }}>
            ONDE DENUNCIAR?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, { marginBottom: 30 }]}
          onPress={onOpen2}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17, color: "#6f5e76" }}>
            MITOS DA VIOLÊNCIA
          </Text>
        </TouchableOpacity>
      </View>

      <Modalize ref={modalizeRef1} snapPoint={500}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#ffdde2",
            borderRadius: 15,
          }}
        >
          <View>
            <View style={styles.conteudo}>
              <Text style={styles.titulo}>Central de Atendimento à Mulher</Text>
              <Text style={styles.paragrafo}>
                {"   "}
                Serviço do governo federal que funciona 24h, todos os dias. Nele
                são fornecidas informações, orientações e reaização de denúncias
                (que podem ser anônimas).
              </Text>
              <TouchableOpacity
                style={[styles.botao, { marginBottom: 16 }]}
                onPress={atendimentoMulher}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#6f5e76" }}
                >
                  180
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.conteudo}>
              <Text style={styles.titulo}>Polícia Militar</Text>
              <Text style={styles.paragrafo}>
                {"   "}
                Para casos mais extremos de abuso domético, recomenda-se o
                contato com a Polícia Militar. Após denúncia válida, uma viatura
                da Polícia Militar é enviada imediatamente até o local da
                infração para o atendimento e procedimentos técnicos, seja
                contenção ou mesmo prisão. Disponível 24h por dia, todos os
                dias. Ligação gratuita.
              </Text>
              <TouchableOpacity
                style={[styles.botao, { marginBottom: 16 }]}
                onPress={policiaMilitar}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#6f5e76" }}
                >
                  190
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.conteudo}>
              <Text style={styles.titulo}>
                Delegacia Especial de Atendimento à Mulher - DEAM
              </Text>
              <Text style={styles.paragrafo}>
                {"   "}
                Diante de qualquer situação que configure violência doméstica, a
                mulher deve registrar a ocorrência em uma delegacia de polícia,
                preferencialmente nas Delegacias Especiais de Atendimento à
                Mulher – DEAM, que funciona 24 horas por dia, todos os dias.
                Costumam ser regionais
              </Text>
            </View>
            <View style={styles.conteudo}>
              <Text style={styles.titulo}>Disque Denúncia</Text>
              <Text style={styles.paragrafo}>
                {"  "}
                Este serviço centralizado permite que qualquer pessoa forneça à
                polícia informações sobre delitos e outras formas de violência,
                tendo garantia absoluta de anonimato.
              </Text>
              <TouchableOpacity
                style={[styles.botao, { marginBottom: 16 }]}
                onPress={disqueDenuncia}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 17, color: "#6f5e76" }}
                >
                  181
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modalize>
      <Modalize ref={modalizeRef2} snapPoint={500}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#ffdde2",
            borderRadius: 15,
          }}
        >
          <View>
            <Text style={styles.titulo}>
              "As mulheres apanham porque gostam ou porque provocam."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Quem é vítima de violência doméstica passa muito tempo tentando
              evitá-la para assegurar sua própria proteção e a de seus filhos.
              As mulheres ficam ao lado dos agressores por medo, vergonha ou
              falta de recursos financeiros, sempre esperando que a violência
              acabe, e nunca para manter a violência.
            </Text>
            <Text style={styles.titulo}>
              "A violência doméstica só acontece em famílias de baixa renda e
              pouca instrução."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}A violência doméstica é um fenômeno que não distingue
              classe social, raça, etnia, religião, orientação sexual, idade e
              grau de escolaridade. Na maioria desses casos, elas já vinham
              sofrendo diversos tipos de violência há algum tempo, mas a
              situação só chega ao conhecimento de outras pessoas quando as
              agressões crescem a ponto de culminar no feminicídio.
            </Text>
            <Text style={styles.titulo}>
              "É fácil identificar o tipo de mulher que apanha."
            </Text>
            <Text style={styles.paragrafo}>
              {" "}
              Não existe um perfil específico de quem sofre violência doméstica.
              Qualquer mulher, em algum período de sua vida, pode ser vítima
              desse tipo de violência.
            </Text>
            <Text style={styles.titulo}>
              "A violência doméstica não ocorre com frequência."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Segundo dados da Organização Mundial da Saúde (OMS), em 2013 o
              Brasil já ocupava o 5º lugar, num ranking de 83 países onde mais
              se matam mulheres. São 4,8 homicídios por 100 mil mulheres, em que
              quase 30% dos crimes ocorrem nos domicílios. Além disso, uma
              pesquisa do DataSenado (2013) revelou que 1 em cada 5 brasileiras
              assumiu que já foi vítima de violência doméstica e familiar
              provocada por um homem
            </Text>
            <Text style={styles.titulo}>
              "Para acabar com a violência, basta proteger as vítimas e punir os
              agressores."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Tanto a proteção das vítimas quanto a punição dos agressores são
              importantes no combate à violência. Mas isso não é suficiente,
              principalmente porque a violência doméstica e familiar contra as
              mulheres é um problema estrutural, ou seja, ocorre com frequência
              em todos os estratos sociais, obedecendo a uma lógica de agressões
              que já são mapeadas pelo ciclo da violência.
            </Text>
            <Text style={styles.titulo}>
              "A mulher não pode denunciar a violência doméstica em qualquer
              delegacia."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}A violência doméstica pode, sim, ser denunciada em qualquer
              delegacia, sem perder de vista, entretanto, que a Delegacia
              Especializada no Atendimento à Mulher (DEAM) é o órgão mais
              capacitado para realizar ações de prevenção, proteção e
              investigação dos crimes de violência de gênero. O acesso à justiça
              é garantido às mulheres no art. 3º da Lei Maria da Penha.
            </Text>
            <Text style={styles.titulo}>
              "Se a situação fosse tão grave, as vítimas abandonariam logo os
              agressores."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Grande parte dos feminicídios ocorre na fase na qual as mulheres
              estão tentando se separar dos agressores. Algumas vítimas, após
              passarem por inúmeros tipos de violência, desenvolvem uma sensação
              de isolamento e ficam paralisadas, sentindo-se impotentes para
              reagir, quebrar o ciclo da violência e sair dessa situação.
            </Text>
            <Text style={styles.titulo}>
              "É melhor continuar na relação, mesmo sofrendo agressões, do que
              se separar e criar o filho sem o pai."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Muitas mulheres acreditam que suportar as agressões e continuar no
              relacionamento é uma forma de proteger os filhos. No entanto, eles
              vivenciam e sofrem a violência com a mãe.
            </Text>
            <Text style={styles.titulo}>
              "Em briga de marido e mulher não se mete a colher./Roupa suja se
              lava em casa."
            </Text>
            <Text style={styles.paragrafo}>
              {"  "}A violência sofrida pela mulher é um problema social e
              público enquanto impacta a economia do País e absorve recursos e
              esforços substanciais tanto do Estado quanto do setor privado:
              aposentadorias precoces, pensões por morte, auxílios-doença,
              afastamentos do trabalho, consultas médicas, internações, etc.
              Conforme o § 2 do art., Além disso, desde 2012, por decisão do
              Supremo Tribunal Federal, a Lei Maria da Penha é passível de ser
              aplicada mesmo sem queixa da vítima, o que significa que qualquer
              pessoa pode fazer a denúncia contra o agressor, inclusive de forma
              anônima.
            </Text>
            <Text style={styles.titulo}>
              "Os agressores não sabem controlar suas emoções."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Se isso fosse verdade, eles também agrediriam chefes, colegas de
              trabalho e outros familiares, e não somente a esposa, as filhas e
              os filhos. A violência doméstica não é apenas uma questão de
              “administrar” a raiva. Os agressores sabem como se controlar,
              tanto que não batem no patrão, e sim na mulher ou nos filhos. Além
              disso, eles agem dessa maneira porque acreditam que não haverá
              consequências pelos seus atos.
            </Text>
            <Text style={styles.titulo}>
              "A violência doméstica vem de problemas com o álcool, drogas ou
              doenças mentais."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}
              Muitos homens agridem as suas mulheres sem que apresentem qualquer
              um desses fatores.
            </Text>
            <Text style={styles.titulo}>
              "A Lei Maria da Penha pode ser aplicada tanto para o homem quanto
              para a mulher."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}A Lei Maria da Penha será aplicada para proteger todas as
              pessoas que se identificam com o gênero feminino e que sofram
              violência em razão desse fato − conforme o parágrafo único do art.
              5º da lei, a violência doméstica e familiar contra a mulher pode
              se configurar independentemente de orientação sexual. Inclusive,
              alguns tribunais de justiça já aplicam a legislação para mulheres
              transexuais. Quanto ao homem, ele será colocado diante da Lei n.
              11.340/2006 sempre que for considerado um agressor. Se ele for
              vítima, serão aplicados os dispositivos previstos no Código Penal,
              e não aqueles presentes na Lei Maria da Penha.
            </Text>
            <Text style={styles.titulo}>
              "A Lei Maria da Penha só foi feita para as mulheres se vingarem
              dos homens."
            </Text>
            <Text style={styles.paragrafo}>
              {"   "}A Lei Maria da Penha cria mecanismos para enfrentar e
              combater a violência doméstica e familiar contra a mulher, ou
              seja, trata-se de uma lei elaborada para proteger as mulheres,
              trazendo inclusive definições claras e precisas sobre a violência
              de gênero. Todo homem que se tornar um agressor infringe a lei e
              viola os direitos humanos das mulheres. Portanto, é preciso fazer
              o registro de ocorrência para que a autoridade policial realize os
              procedimentos necessários tanto para a proteção da vítima quanto
              para a investigação dos fatos. Diante disso, em vez de falar em
              “vingança”, deve-se falar em “justiça”.
            </Text>
          </View>
        </View>
      </Modalize>
      <StatusBar/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffdde2",
    marginTop: 35,
  },
  conteudo: {
    backgroundColor: "#ff8cc6",
    borderRadius: 17,
    marginTop: 15,
    margin: 10,
  },
  titulo: {
    fontSize: 22,
    textAlign: "center",
    margin: 15,
    fontWeight: "bold",
    color: "#6f5e76",
  },
  paragrafo: {
    fontSize: 19,
    margin: 18,
    textAlign: "justify",
    color: "#6f5e76",
    fontWeight: "bold",
    opacity: 0.7
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 7,
    marginBottom: 8,
    backgroundColor: "#ffdde2",
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Orientacao;
