PART="https://raw.githubusercontent.com/tripathics/homepage/main/static/media/";

for IMG in "comingsoon.png" "dna.png" "filter.png" "loanenq.png" "pp.jpeg" "speller.png" "todo.png" "typing-game.png"
do
    LINK="${PART}${IMG}";
    curl $LINK > $IMG;
done