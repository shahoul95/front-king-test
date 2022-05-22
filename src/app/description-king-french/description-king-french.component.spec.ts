import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionKingFrenchComponent } from './description-king-french.component';

describe('CardComponent', () => {
  let component: DescriptionKingFrenchComponent;
  let fixture: ComponentFixture<DescriptionKingFrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionKingFrenchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionKingFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
