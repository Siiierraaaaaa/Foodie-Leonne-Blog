import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolaComponent } from './nola.component';

describe('NolaComponent', () => {
  let component: NolaComponent;
  let fixture: ComponentFixture<NolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NolaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
