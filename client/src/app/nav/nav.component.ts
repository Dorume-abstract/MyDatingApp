import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { MembersService } from '../_services/members.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit
{
    model: any = {};

    constructor (
        public accountService: AccountService,
        private router: Router,
        private memberService: MembersService) { }

    ngOnInit(): void { }

    login()
    {
        this.accountService.login(this.model).subscribe(
        {
            next: _ =>
            {
                console.log(this.memberService.resetUserParams());
                this.redirectProfilePage();
                this.model = {};
            }
        }
        );
    }

    logout()
    {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }

    redirectProfilePage(){
        this.router.navigateByUrl('/members');
    }
}
