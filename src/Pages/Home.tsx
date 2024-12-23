import {
  Header,
  NavBar,
  PersonalInfo,
  MyResume,
  MyPortfolio,
  Footer,
} from '../Components'

export const Home = () => {

  /*  const createXmasTree = (height: number, ornament: string): string => {
     let branches: string = '';
 
     for (let i = 0; i < height; i++) {
       const padding = '_'.repeat(height - i - 1);  // Espacios antes y después de los adornos
       const ornaments = ornament.repeat(i * 2 + 1); // Adornos en el nivel i
       branches += `${padding}${ornaments}${padding}\n`;  // Añadimos la rama a la cadena
     }
     const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
     return branches + trunk + '\n' + trunk;
 
   } */

  type Shoes = { type: string, size: number }[];

  const shoes: Shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 },
  ]

  const organizeShoes = (shoes: Shoes): number[] => {
    const sizes = new Set<number>();

    // Iteramos sobre las botas
    shoes.forEach(shoe => {
      // Si encontramos tanto una bota izquierda como una derecha, agregamos el tamaño al conjunto
      if (shoe.type === 'R' && shoes.some(s => s.type === 'I' && s.size === shoe.size)) {
        sizes.add(shoe.size);
      }
    });

    // Convertimos el Set a un array y lo devolvemos
    return [...sizes];
  };


  console.log(organizeShoes(shoes));


























  return (
    <>
      <Header />
      <NavBar />
      <PersonalInfo />
      <MyResume />
      <MyPortfolio />
      <Footer />
    </>
  )
}
