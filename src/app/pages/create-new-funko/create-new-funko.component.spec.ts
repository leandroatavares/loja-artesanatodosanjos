import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFunkoComponent } from './create-new-funko.component';

describe('CreateNewFunkoComponent', () => {
  let component: CreateNewFunkoComponent;
  let fixture: ComponentFixture<CreateNewFunkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewFunkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewFunkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
