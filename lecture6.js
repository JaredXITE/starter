//LECTURE: Equality Operators: == vs. ===
//1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
//2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
//3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
//4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
//5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
//6. Change==to===,andtestthecodeagain,withthesamevaluesof
//'numNeighbours'. Notice what happens when there is exactly 1 border! Why
//is this happening?
//7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
//when you input 1
//8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
//situation


const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?'),
    );
    if (numNeighbours === 1) {
      console.log('Only 1 border!');
    } else if (numNeighbours > 1) {
      console.log('More than 1 border');
    } else {
      console.log('No borders');
    }