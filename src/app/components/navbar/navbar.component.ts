import { Component, OnInit } from '@angular/core';

// Services
import { AuthenticationService } from '../../services/authentication.service';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Modal
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean;

  constructor(
    public authenticationService: AuthenticationService,
    private modalService: NgbModal
  ) {
    this.authenticationService.authState$.subscribe(user => {
      if (user == null) {
        this.isLogin = false;
      }else {
        this.isLogin = true;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.typeOfModal = 'add';
  }
}
