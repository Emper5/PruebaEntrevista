import { FormBuilder } from "@angular/forms";
import { CarComponent } from "./car.component"




describe('Form', () => {

    let component: CarComponent;

    beforeEach( () => {
        
        component = new CarComponent( new FormBuilder(), null, null, null) ;

    } );


    it('Must create a form with 4 items.', () => {
        expect( component.form.contains('brand')).toBeTruthy();
        expect( component.form.contains('model')).toBeTruthy();
        expect( component.form.contains('year')).toBeTruthy();
        expect( component.form.contains('price')).toBeTruthy();

    } );

    it('Controls brand, model, year and price must be required.', () => {
        const  form =  component.form;
        form.get('brand').setValue('Ford');
        form.get('model').setValue('Escort');               
        form.get('year').setValue('2019');
        form.get('price').setValue('10000');
        expect(form.invalid).toEqual(false);

    });




})