import pygame
import sys

def main():
    pygame.init()
    size = (800, 600)
    screen = pygame.display.set_mode(size)
    pygame.display.set_caption("Paint app")
    clock = pygame.time.Clock()
    drawing = False
    color = (0, 0, 0)
    radius = 5

    screen.fill((255, 255, 255))

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                drawing = True
            elif event.type == pygame.MOUSEBUTTONUP and event.button == 1:
                drawing = False
            elif event.type == pygame.KEYDOWN and event.key == pygame.K_c:
                screen.fill((255, 255, 255))

        if drawing:
            pos = pygame.mouse.get_pos()
            pygame.draw.circle(screen, color, pos, radius)

        pygame.display.flip()
        clock.tick(60)

if __name__ == "__main__": main()