# Rapport des employés
## Description du problème

Vous construisez un système de gestion des employés d'une épicerie locale. 
Le propriétaire du magasin souhaite ouvrir le magasin le dimanche et 
en raison de restrictions légales, les employés de moins de 18 ans ne sont pas autorisés
à travailler le dimanche. L'employée demande une fonction de rapport afin de pouvoir 
planifier des quarts de travail. Tous les employés sont déjà stockés quelque part et 
ont les propriétés suivantes:
 - name: string(le nom de l'employé)
 - age: number(l'âge en années de l'employé)


     const employees = [
        { name: 'Max', age: 17 },
        { name: 'Sepp', age: 18 },
        { name: 'Nina', age: 15 },
        { name: 'Mike', age: 51 },
    ];
   
### Des règles
Commencez par la première user-story et écrivez au moins un test pour chaque exigence.
Essayez de ne pas regarder les exigences futures d'avance et suivez 
strictement le cycle TDD.

  - En tant que propriétaire de magasin, je souhaite consulter une liste de tous les 
  employés âgés de plus de 18 ans, afin de savoir qui est autorisé à travailler 
  le dimanche.
  - En tant que propriétaire de magasin, je veux que la liste des employés soit triée par leur nom, afin de pouvoir trouver des employés plus facilement.
    En tant que propriétaire de magasin, je veux que la liste des employés soit capitalisée, afin que je puisse mieux la lire.
  - En tant que propriétaire de magasin, je veux que les employés soient triés par leurs noms décroissants au lieu de croissant