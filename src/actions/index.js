import flats from '../flats';
export function setFlats() {
 // TODO: Api call! For now, simulate a DB

 return {
   type: 'SET_FLATS',
   payload: flats
 }
}
