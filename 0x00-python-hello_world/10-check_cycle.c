#include "lists.h"

/**
 * check_cycle - checks if a singly linked list has a cycle in it.
 *
 * @list: list to check it.
 *
 * Return:0 if there is no cycle, 1 if there is a cycle.
 */
int check_cycle(listint_t *list)
{
	listint_t *new;
	listint_t *old;

	if (!list || !list->next)
		return (0);

	new = list;
	old = list->next;

	while (new != old)
	{
		if (!old || !old->next)
			return (0);

		new = new->next;
		old = old->next->next;
	}

	return (1);
}
