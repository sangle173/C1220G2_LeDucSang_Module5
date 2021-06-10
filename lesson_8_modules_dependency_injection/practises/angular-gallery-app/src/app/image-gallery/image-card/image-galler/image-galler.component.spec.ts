import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGallerComponent } from './image-galler.component';

describe('ImageGallerComponent', () => {
  let component: ImageGallerComponent;
  let fixture: ComponentFixture<ImageGallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
