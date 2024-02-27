<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\AdvertisementsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AdvertisementsRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(),
        new Post(),
        new Get(),
        new Put(),
        new Patch(),
        new Delete()
    ],
    normalizationContext: ['groups' => ['read:advertisements']],
    denormalizationContext: ['groups' => ['write:advertisements']],
    order: ['updateAt' => 'DESC'],
    paginationClientItemsPerPage: true,
    paginationItemsPerPage: 4,
    paginationMaximumItemsPerPage: 4,

)]

class Advertisements
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?string $slug = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?\DateTimeImmutable $createAt = null;

    #[ORM\Column]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?\DateTimeImmutable $updateAt = null;

    #[ORM\ManyToOne(inversedBy: 'advertisements')]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?Companies $compagnies = null;

    #[ORM\OneToMany(mappedBy: 'advertisement', targetEntity: JobApplication::class)]
    private Collection $jobApplications;

    #[ORM\Column]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?int $startPrice = null;

    #[ORM\ManyToOne(inversedBy: 'advertisements')]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?WorkTime $workingTime = null;

    #[ORM\ManyToOne(inversedBy: 'advertisements')]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?City $city = null;

    #[ORM\Column]
    #[Groups(['read:advertisements', 'write:advertisements'])]
    private ?int $endPrice = null;

    public function __construct()
    {
        $this->jobApplications = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): static
    {
        $this->slug = $slug;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getCreateAt(): ?\DateTimeImmutable
    {
        return $this->createAt;
    }

    public function setCreateAt(\DateTimeImmutable $createAt): static
    {
        $this->createAt = $createAt;

        return $this;
    }

    public function getUpdateAt(): ?\DateTimeImmutable
    {
        return $this->updateAt;
    }

    public function setUpdateAt(\DateTimeImmutable $updateAt): static
    {
        $this->updateAt = $updateAt;

        return $this;
    }

    public function getCompagnies(): ?Companies
    {
        return $this->compagnies;
    }

    public function setCompagnies(?Companies $compagnies): static
    {
        $this->compagnies = $compagnies;

        return $this;
    }

    /**
     * @return Collection<int, JobApplication>
     */
    public function getJobApplications(): Collection
    {
        return $this->jobApplications;
    }

    public function addJobApplication(JobApplication $jobApplication): static
    {
        if (!$this->jobApplications->contains($jobApplication)) {
            $this->jobApplications->add($jobApplication);
            $jobApplication->setAdvertisement($this);
        }

        return $this;
    }

    public function removeJobApplication(JobApplication $jobApplication): static
    {
        if ($this->jobApplications->removeElement($jobApplication)) {
            // set the owning side to null (unless already changed)
            if ($jobApplication->getAdvertisement() === $this) {
                $jobApplication->setAdvertisement(null);
            }
        }

        return $this;
    }

    public function getStartPrice(): ?int
    {
        return $this->startPrice;
    }

    public function setStartPrice(int $startPrice): static
    {
        $this->startPrice = $startPrice;

        return $this;
    }

    public function getWorkingTime(): ?WorkTime
    {
        return $this->workingTime;
    }

    public function setWorkingTime(?WorkTime $workingTime): static
    {
        $this->workingTime = $workingTime;

        return $this;
    }

    public function getCity(): ?City
    {
        return $this->city;
    }

    public function setCity(?City $city): static
    {
        $this->city = $city;

        return $this;
    }

    public function getEndPrice(): ?int
    {
        return $this->endPrice;
    }

    public function setEndPrice(int $endPrice): static
    {
        $this->endPrice = $endPrice;

        return $this;
    }
}
