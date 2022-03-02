import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaPipeComponent } from './fecha-pipe.component';

describe('FechaPipeComponent', () => {
  let component: FechaPipeComponent;
  let fixture: ComponentFixture<FechaPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
