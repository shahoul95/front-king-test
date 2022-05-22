import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(description: string) : string{
    let missionTypeText = "";
    switch (description) {
      case "Henri IV le Grand":
        missionTypeText = "Roi de Navarre, " +
          "il s’est illustré, avant son accession au trône, " +
          "dans les guerres de Religion en tant que chef des huguenots. " +
          "C’est lui, en effet, qui a mis fin à plusieurs décennies de combats " +
          "en abjurant le protestantisme et en promulguant l’édit de Nantes. " +
          "Ralliant dans un premier temps le peuple derrière la couronne, " +
          "il s’est ensuite efforcé de redresser le pays d’une main de fer.";
        break;
      case "Louis XIII le Juste":
        missionTypeText = "Il démontre dès son plus jeune " +
          "âge un grand intérêt pour la guerre et l'histoire." +
          "Son père meurt en 1610, et il monte alors sur le trône " +
          "à seulement 8 ans. Sa mère assure la régence du royaume, " +
          "une période de troubles caractérisée par une mauvaise gestion " +
          "des affaires et des hostilités à la centralisation du pouvoir commencée par Henri IV. ";
        break;
      case "Louis XIV le Roi Soleil":
        missionTypeText = "Au cours d’un règne personnel de 54 ans, " +
          "le rayonnement du \"Roi-Soleil\" a su apporter à la France " +
          "un immense prestige au sein de l’Europe. Malgré les guerres " +
          "et les crises financières, il s’est toujours efforcé de protéger " +
          "et d’enrichir son royaume, tant sur les plans économique et géographique " +
          "que culturel. Le \"Roi-Soleil\", grand monarque absolu, laisse le souvenir " +
          "d’une France rayonnante, comme en témoigne le splendide château de Versailles.";
        break;
      case "Louis XV":
        missionTypeText = "l est couronné roi de France très jeune, " +
          "à la mort de son arrière grand-père Louis XIV," +
          " alors qu'il n'a que cinq ans. " +
          "Ses parents sont déjà morts depuis trois ans. " +
          "Cependant, le gouvernement est assuré " +
          "dans les années qui suivent par plusieurs régents et premiers ministres,";
        break;
      case "Louis XVI":
        missionTypeText = "Versailles, Louis XVI est le dernier roi de la monarchie " +
          "absolue française. Son tempérament, éloigné des vertus de leader et de " +
          "réformateur, peine à engager la France dans la voie de modernité et conduit " +
          "le royaume vers une crise politique, économique et sociale qui participe à " +
          "la naissance de la Révolution française";
        break;
    }
    return missionTypeText;
  }

}
