import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageingComponent } from './pageing.component';

describe('PageingComponent', () => {
  let component: PageingComponent;
  let fixture: ComponentFixture<PageingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
