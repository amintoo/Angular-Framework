import { Component } from "@angular/core";
import { DevoirsService } from "./devoirs.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nom = "";
  projets = [
    {
      matiere: "React",
      dateDeRendu: "20/01/2020",
      rendu: false
    },
    {
      matiere: "TPT",
      dateDeRendu: "25/01/2020",
      rendu: false
    },
    {
      matiere: "BigData",
      dateDeRendu: "12/12/2019",
      rendu: true
    }
  ];

  // On "injecte" le service
  constructor(private devoirService: DevoirsService) {}

  // Appelé lorsque le composant est créé

  ngOnInit(): void {
    this.getDevoirs();
  }

  async getDevoirs() {
    // on utilise DevoirService pour faire la
    // requête GET sur le web service
    let response = await this.devoirService.getDevoirs();

    this.projets = [];
    response.data.forEach(nom => {
      let projet: any = {};
      projet.matiere = nom;
      projet.dateDeRendu = "non précisée";
      projet.rendu = false;

      this.projets.push(projet);
    });
  }

  onRendreProjet(p) {
    console.log("Projet soumis : " + p);
  }

  onAddProjet() {
    console.log("On ajoute le projet " + this.nom);
    this.projets.push({
      matiere: this.nom,
      rendu: false,
      dateDeRendu: "non précisé"
    });

    // on vide le champ
    this.nom = "";
  }
}
