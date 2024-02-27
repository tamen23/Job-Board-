<?php

namespace App\Event;

use App\Entity\JobApplication;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class JobApplicationCreateAtListener
{
    public function prePersist(JobApplication $jobApplication, LifecycleEventArgs $event): void
    {
        $jobApplication->setCreateAt(new \DateTimeImmutable());
    }
}