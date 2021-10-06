import { FormBuilder } from "@angular/forms";
import { CarComponent } from "./car.component"




describe('Form', () => {

    let component: CarComponent;

    beforeEach( () => {
        
        component = new CarComponent( new FormBuilder(), null, null, null) ;

    } );

    it('Must create a form with 4 items', () => {
        expect( component.form.contains('brand')).toBeTruthy();
        expect( component.form.contains('model')).toBeTruthy();
        expect( component.form.contains('year')).toBeTruthy();
        expect( component.form.contains('price')).toBeTruthy();

    } );

    it('All items must be required', () => {
        
        const control = [component.form.get('brand'), 
                        component.form.get('model'),
                        component.form.get('year'),
                        component.form.get('price')];

        

        for (let index = 0; index < control.length; index++) {
            control[index].setValue('')
        }; 
                    
        

        expect(control[0].valid && control[1].valid && control[2].valid && control[3].valid).toBeFalsy();


    });




})