<?php

namespace App\Event;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\JobApplication;
use JetBrains\PhpStorm\NoReturn;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;


class JobApplicationUserSubscriber implements EventSubscriberInterface
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => ['setUserForJobApplication', EventPriorities::PRE_VALIDATE],
        ];
    }

    #[NoReturn] public function setUserForJobApplication(ViewEvent $event): void
    {
        $jobApplication = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ( $jobApplication instanceof JobApplication && $method === "POST" ) {
            $user = $this->security->getUser();
            $jobApplication->setUser($user);
        }

        dd($jobApplication);
    }
}