import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyFavsComponent } from './family-favs.component';

describe('FamilyFavsComponent', () => {
  let component: FamilyFavsComponent;
  let fixture: ComponentFixture<FamilyFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
