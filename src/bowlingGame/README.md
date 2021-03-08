# Bowling
## Problem description
Create a program, which, given a valid sequence of rolls for one 
line of American Ten-Pin Bowling, produces the total score for the game. 
Here are some things that the program will not do:
 - We will not check for valid rolls
 - We will not check for correct number of rolls and frame
 - We will not provide score for intermediate frames

Depending on the application, this might or might not be a valid 
way to define a complete story, but we do it here for purposes 
of keeping the kata light. I think you’ll see that improvements 
like those above would go in readily if they were needed for real.

We can briefly summarize the scoring for this form of bowling:
 
- Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
- In each frame, the bowler gets up to two tries to knock down all the pins.
- If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
- If in two tries he knocks them all down, this is called a “spare”, and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
- If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
- If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
- The game score is the total of all frame scores.

## Description du problème
Créez un programme qui, étant donné une séquence valide de rouleaux pour une ligne d’American Ten-Pin Bowling, 
produit le score total pour le match. Voici certaines choses que le programme ne fera pas :
 - Nous ne vérifierons pas les rouleaux valides.
 - Nous ne vérifierons pas le nombre correct de rouleaux et de cadres.
 - Nous ne fournirons pas de scores pour les cadres intermédiaires.
  
  Selon l'application, cela peut ou non être un moyen valable de définir une histoire complète,
  mais nous le faisons ici dans le but de garder le kata léger. 
  Je pense que vous verrez que des améliorations comme celles ci-dessus 
  entreraient facilement si elles étaient nécessaires pour de vrai.

  Nous pouvons résumer brièvement le score pour cette forme de bowling:
 
 - Chaque jeu, ou «ligne» de bowling, comprend dix tours, ou «cadres» pour le quilleur.
 - Dans chaque image, le quilleur obtient jusqu'à deux essais pour abattre toutes les quilles.
 - Si en deux essais, il ne parvient pas à tous les faire tomber, son score pour cette image est le nombre total de quilles renversées lors de ses deux essais.
 - Si en deux essais il les renverse tous, c'est ce qu'on appelle une «pièce de rechange» et son score pour le cadre est de dix plus le nombre de quilles renversées lors de son prochain lancer (lors de son prochain tour).
 - Si lors de son premier essai dans le cadre, il renverse toutes les quilles, cela s'appelle une «grève». Son tour est terminé et son score pour le cadre est de dix plus le total simple des quilles renversées lors de ses deux prochains lancers
 - S'il obtient une réserve ou une grève dans le dernier (dixième) cadre, le quilleur peut lancer respectivement une ou deux balles bonus supplémentaires. Ces lancers bonus sont effectués dans le cadre du même tour. Si les lancers bonus renversent toutes les quilles, le processus ne se répète pas: les lancers bonus ne servent qu'à calculer le score de la dernière image.
 - Le score du jeu est le total de tous les scores d'image.

